// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
          <h3>LOGO</h3>
          <p> Chính sách bảo mật </p>
          <p> Điều khoản dịch vụ </p>
        </div>
        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h3>Liên Kết Nhanh</h3>
          <p>Facebook: Roomie</p>
          <p>Instagram: roomie_day</p>
          <p>Tiktok: Roomie Nè!</p>
        </div>
        <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
          <h3>Thông Tin Liên Hệ</h3>
          <p>Email: Roomie@gmail.com</p>
          <p>CSKH: 0123456789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  