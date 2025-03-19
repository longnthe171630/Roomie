// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User'); // Path to your User model
const { body, validationResult } = require('express-validator'); // For input validation

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI; // Make sure MONGO_URI is in your .env file
if (!mongoURI) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1); // Exit if MongoDB URI is not defined
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit the application if database connection fails
});

// --- API Endpoints ---

// @route   POST /api/register
// @desc    Register new user
// @access  Public
app.post('/api/register', [
    // Input validation using express-validator
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3, max: 50 }).withMessage('Username must be between 3 and 50 characters')
        .custom(value => !/\s/.test(value)).withMessage('Username cannot contain spaces'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        // Check if username or email already exists
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(409).json({ message: 'Email already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save user to database
        const user = await newUser.save();

        // Respond with success message and user info (excluding password)
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Failed to register user', error: error.message });
    }
});

// @route   POST /api/login
// @desc    Login user and return JWT
// @access  Public
app.post('/api/login', [
    // Input validation for login
    body('usernameOrEmail')
        .trim()
        .notEmpty().withMessage('Username or email is required'),
    body('password')
        .notEmpty().withMessage('Password is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { usernameOrEmail, password } = req.body;

    try {
        // Find user by username or email
        const user = await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Make sure JWT_SECRET is in your .env file
            { expiresIn: '1h' },
            (err, token) => {
                if (err) {
                    console.error('JWT signing error:', err);
                    return res.status(500).json({ message: 'Failed to generate token' });
                }
                res.status(200).json({
                    message: 'Login successful',
                    token: token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    }
                });
            }
        );

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});