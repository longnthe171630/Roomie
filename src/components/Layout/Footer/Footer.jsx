import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">Roomie</div>
          <div className="footer-links">
            <a href="/privacy" className="footer-link">Chính sách bảo mật</a>
            <a href="/terms" className="footer-link">Điều khoản sử dụng</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="contact-info">
            <p>Email: 123@gmail.com</p>
            <p>Điện thoại: 0123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 