import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login_Register.css';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';

const RegisterPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ usernameOrEmail: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  // Xử lý thay đổi trong input
  const handleChange = (e, type) => {
    if (type === "login") {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    } else {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }
  };

  // Xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      navigate("/"); // Chuyển hướng về trang chủ
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Xử lý đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      alert("Registration successful! Please login.");
      setIsActive(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Header scrolled={false} />
      
      {errorMessage && <p className="error">{errorMessage}</p>}

      <div className={`container ${isActive ? 'active' : ''}`}>
        
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="usernameOrEmail" placeholder="Username or Email" required onChange={(e) => handleChange(e, "login")} />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" required onChange={(e) => handleChange(e, "login")} />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" name="username" placeholder="Username" required onChange={(e) => handleChange(e, "register")} />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" required onChange={(e) => handleChange(e, "register")} />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" required onChange={(e) => handleChange(e, "register")} />
            </div>
            <div className="input-box">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={(e) => handleChange(e, "register")} />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hi, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
