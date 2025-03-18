import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Roomie</div>
        <nav className="nav-menu">
          <a href="/" className="nav-link">Trang chủ</a>
          <a href="/about" className="nav-link">Về chúng tôi</a>
          <a href="/contact" className="nav-link">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}; 