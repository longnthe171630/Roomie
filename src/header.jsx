// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './head_foot.css';
const Header = ({ scrolled, isMenuOpen, toggleMenu, handleNavClick, activeNav }) => {
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
            <div className="auth-buttons mobile-auth">
              <Link to="/login_register" className="login-button">Đăng nhập</Link>
            </div>
          </nav>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Auth buttons for desktop */}
        <div className="auth-buttons desktop-auth">
          <Link to="/login_register" className="login-button">Đăng nhập</Link>
        </div>

        <div className="user-avatar">
          <img src="/avatar-placeholder.png" alt="User Avatar" className="avatar-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;