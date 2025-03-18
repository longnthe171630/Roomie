import React, { useEffect, useState } from "react";
import "./Homepage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Footer from '../../footer';
import Header from '../../header';

export const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      // Check if window is available (browser environment)
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 30);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial state
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      <div className="container">
        {/* Header */}
        <Header 
          scrolled={scrolled} 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          handleNavClick={handleNavClick} 
          activeNav={activeNav} 
        />

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Tìm Bạn Ở Ghép Lý Tưởng Nhanh Chóng & An Toàn!
            </h1>
            <p className="hero-text">
              Roomie giúp bạn tìm phòng trọ phù hợp hoặc ghép bạn cùng phòng
              theo sở thích, thói quen và ngân sách. Tận hưởng không gian sống
              lý tưởng với hệ thống gợi ý thông minh và thông tin minh bạch.
            </p>
            <a href="#roommates" className="cta-button">Bắt đầu ngay!</a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials" id="matches">
          <h2 className="section-title" data-aos="fade-up">Phản Hồi Của Khách Hàng</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-1-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-2-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-20-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-2-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-20-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-2-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-20-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-2-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-20-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua...
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  alt="Author"
                  src="https://c.animaapp.com/5GdoH1sZ/img/image-2-1@2x.png"
                />
                <div className="author-info">
                  <div className="author-name">LOREM IPSUM DOLOR SIT AMET</div>
                  <div className="rating">
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-19-1.svg" alt="Star" />
                    <img src="https://c.animaapp.com/5GdoH1sZ/img/star-20-1.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="roommates">
          <div className="container">
            <div className="features-container">
              <div className="features-image-wrapper" data-aos="fade-right" data-aos-delay="100">
                <img
                  className="main-image"
                  src="https://i.pinimg.com/474x/ef/42/7b/ef427b729fee9253469be555ec2c88cd.jpg"
                  alt="Mountain landscape"
                />
                <div className="circle-image-wrapper">
                  <img
                    className="circle-image"
                    src="https://c.animaapp.com/5GdoH1sZ/img/image-2@2x.png"
                    alt="Circular image"
                  />
                </div>
              </div>
              
              <div className="features-content" data-aos="fade-left" data-aos-delay="200">
                <h2 className="features-title">Vì Sao Nên Chọn Chúng Tôi?</h2>
                <div className="why-choose-us">Why Choose Us</div>
                <div className="features-list">
                  <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
                    {/* <div className="feature-number">01</div> */}
                    <p className="feature-text">
                      🌟 Đội ngũ hỗ trợ nhiệt tình 24/7, luôn sẵn sàng giải đáp mọi thắc mắc của bạn!
                    </p>
                  </div>
                  <div className="feature-item" data-aos="zoom-in" data-aos-delay="400">
                    {/* <div className="feature-number">02</div> */}
                    <p className="feature-text">
                      🔒 Cam kết bảo mật thông tin cá nhân tuyệt đối, an toàn tối đa cho người dùng!
                    </p>
                  </div>
                  <div className="feature-item" data-aos="zoom-in" data-aos-delay="500">
                    {/* <div className="feature-number">03</div> */}
                    <p className="feature-text">
                      🤝 Kết nối bạn với người bạn cùng phòng lý tưởng, tạo nên những kỷ niệm đáng nhớ!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="testimonials" id="blog" style={{ background: '#f8f9fa' }}>
          <h2 className="section-title" data-aos="fade-up">Blog</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img 
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Author avatar"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">BabyThree_124</div>
                </div>
                <p className="testimonial-text">
                Nhiều người xác định đây là một cá thể dơi ngựa (Pteropus vampyrus), loài dơi lớn nhất tính theo độ dài sải cánh. 
                Trông to x-ác thế thôi nhưng vô hại, tính tình hướng nội, thích treo mình trên cây chill chill vào những buổi hoàng hôn, ăn trái cây, đặc biệt ưa thích trái sung và uống mật hoa.
                </p>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img 
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Author avatar"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">BabyThree_124</div>
                </div>
                <p className="testimonial-text">
                  Cách tìm bạn cùng phòng tuyệt vời nhất!
                </p>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img 
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Author avatar"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">BabyThree_124</div>
                </div>
                <p className="testimonial-text">
                  Cách tìm bạn cùng phòng tuyệt vời nhất!
                </p>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img 
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Author avatar"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">BabyThree_124</div>
                </div>
                <p className="testimonial-text">
                  Cách tìm bạn cùng phòng tuyệt vời nhất!
                </p>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img 
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Author avatar"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">BabyThree_124</div>
                </div>
                <p className="testimonial-text">
                  Cách tìm bạn cùng phòng tuyệt vời nhất!
                </p>
              </div>
            </div>

            <div className="testimonial-card" data-aos="fade-left" data-aos-delay="200">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <img
                    src="https://i.pravatar.cc/50?img=2" 
                    alt="Author avatar"
                    style={{
                      width: '70px',
                      height: '70px', 
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="author-name">Babylon_233</div>
                </div>
                <p className="testimonial-text">
                  Dễ dàng đăng kí, truy cập mọi lúc!Dễ dàng đăng kí, truy cập mọi lúc!Dễ dàng đăng kí, truy cập mọi lúc!Dễ dàng đăng kí, truy cập mọi lúc!Dễ dàng đăng kí, truy cập mọi lúc!Dễ dàng đăng kí, truy cập mọi lúc!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
