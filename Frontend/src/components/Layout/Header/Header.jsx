import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ scrolled, isMenuOpen, toggleMenu, handleNavClick, activeNav }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login_register');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo" onClick={() => handleNavClick('home')}>
          <img src="/R.png" alt="Logo" className="logo-img" />
          <span>ROOMIE</span>
        </Link>
        
        <div className="nav-container">
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >TRANG CHỦ</Link>
            <Link 
              to="/roommate" 
              className={`nav-item ${activeNav === 'roommates' ? 'active' : ''}`}
              onClick={() => handleNavClick('roommates')}
            >ROOMMATES</Link>
            <Link 
              to="/matches" 
              className={`nav-item ${activeNav === 'matches' ? 'active' : ''}`}
              onClick={() => handleNavClick('matches')}
            >MATCHES</Link>
            <Link 
              to="/blog" 
              className={`nav-item ${activeNav === 'blog' ? 'active' : ''}`}
              onClick={() => handleNavClick('blog')}
            >BLOG</Link>
            
            {/* Auth buttons for mobile */}
            {!isLoggedIn ? (
              <div className="auth-buttons mobile-auth">
                <Link to="/login_register" className="login-button">Đăng nhập</Link>
              </div>
            ) : null}
          </nav>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Auth buttons for desktop */}
        {!isLoggedIn ? (
          <div className="auth-buttons desktop-auth">
            <Link to="/login_register" className="login-button">Đăng nhập</Link>
          </div>
        ) : (
          <div className="user-avatar-container">
            <div className="user-avatar" onClick={() => setShowLogout(!showLogout)}>
              <img src="https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg" alt="User Avatar" className="avatar-img" />
            </div>
            {showLogout && (
              <div className="logout-dropdown">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
