import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Match_Result.css';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';

// Simple pagination component that uses URL params
const UrlPagination = ({ activePage, totalPages, onPageChange }) => {
  const handleClick = (e, page) => {
    e.preventDefault();
    e.stopPropagation(); // Ngăn chặn sự kiện lan rộng
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };
  
  return (
    <>
      <button 
        className="page-navigation-button left"
        onClick={(e) => handleClick(e, activePage - 1)}
        disabled={activePage === 1}
      >
        <i className="previous-icon">‹</i>
      </button>

      <button 
        className="page-navigation-button right"
        onClick={(e) => handleClick(e, activePage + 1)}
        disabled={activePage === totalPages}
      >
        <i className="next-icon">›</i>
      </button>
      
      <div className="pagination">
        <div className="pagination-dots">
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              className={`pagination-dot ${activePage === index + 1 ? 'active' : ''}`}
              onClick={(e) => handleClick(e, index + 1)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

const Match_Result = () => {
  const [activeTab, setActiveTab] = useState('thongTin');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});
  
  // Dữ liệu mẫu cho các kết quả tìm kiếm
  const matchResults = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=1',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    },
    {
      id: 2,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=2',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    },
    {
      id: 3,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=3',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    },
    {
      id: 4,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=4',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    },
    {
      id: 5,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=5',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    },
    {
      id: 6,
      name: 'Nguyễn Văn A',
      age: 21,
      gender: 'Nam',
      occupation: 'Sinh viên',
      image: 'https://i.pravatar.cc/150?img=6',
      personality: 'Trung bình',
      sociable: 'Sôi nổi',
      diet: 'Thức khuya',
      frequency: 'Tuần 2 lần',
      cleanliness: 'Hiếm khi',
      smoking: 'Không'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    // Mô phỏng hiển thị kết quả tìm kiếm từ từ
    const timer = setTimeout(() => {
      document.querySelector('.results-container').classList.add('loaded');
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderDropdownInfo = (label, value) => (
    <div className="dropdown-info">
      <div className="dropdown-icon">
        {label === 'Sôi nổi' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 5.79 4.75 5.79s4.75-3.22 4.75-5.79C16.75 4.13 14.62 2 12 2z"/>
          </svg>
        )}
        {label === 'Pickleball' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        )}
        {label === 'Thức khuya' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        )}
        {label === 'Tuần 2 lần' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        )}
        {label === 'Hiếm khi' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        )}
      </div>
      <span>{value}</span>
      <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  );

  return (
    <div className="match-result-container">
        <Header />
      <div className="match-result-hero">
        <div className="hero-content">
          
          <div className="filter-robot" data-aos="zoom-in" data-aos-delay="300">
            <svg className="robot-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,15h-4v1h-4v-1H6v-4h1V7h10v4h1V15z"/>
              <circle cx="8.5" cy="11.5" r="1.5"/>
              <circle cx="15.5" cy="11.5" r="1.5"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div 
          className={`tab ${activeTab === 'thongTin' ? 'active' : ''}`} 
          onClick={() => handleTabChange('thongTin')}
        >
          THÔNG TIN CỦA BẠN
        </div>
        <div 
          className={`tab ${activeTab === 'daTuongTac' ? 'active' : ''}`} 
          onClick={() => handleTabChange('daTuongTac')}
        >
          ĐÃ TƯƠNG HỢP
        </div>
        <div 
          className={`tab ${activeTab === 'phanHoi' ? 'active' : ''}`} 
          onClick={() => handleTabChange('phanHoi')}
        >
          CHỜ TƯƠNG HỢP
        </div>
        <div 
          className={`tab ${activeTab === 'banBe' ? 'active' : ''}`} 
          onClick={() => handleTabChange('banBe')}
        >
          BẠN BÈ
        </div>
      </div>
      <h1 className="result-title" data-aos="fade-down">Kết Quả</h1>
      
      <UrlPagination 
        activePage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
      
      <div className="results-container">
        <div className="results-grid">
          {matchResults.map((result) => (
            <div 
              key={result.id} 
              className="result-card"
              data-aos="fade-up"
              data-aos-delay={`${result.id * 100}`}
            >
              <div className="profile-image">
                <img src={result.image} alt={result.name} />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{result.name}</h3>
                <p className="profile-details">
                  {result.gender}, {result.age} tuổi<br />
                  {result.occupation}
                </p>
              </div>
              <div className="profile-details-grid">
                <div className="details-row">
                  {renderDropdownInfo('Sôi nổi', 'Sôi nổi')}
                  {renderDropdownInfo('Pickleball', 'Pickleball')}
                </div>
                <div className="details-row">
                  {renderDropdownInfo('Thức khuya', 'Thức khuya')}
                  {renderDropdownInfo('Hiếm khi', 'Hiếm khi')}
                </div>
                <div className="details-row">
                  {renderDropdownInfo('Tuần 2 lần', 'Tuần 2 lần')}
                  {renderDropdownInfo('Không', 'Không')}
                </div>
              </div>
              <button 
                className={`favorite-button ${favorites[result.id] ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(result.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Match_Result;
