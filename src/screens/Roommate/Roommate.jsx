import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Roommate.css';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import 'aos/dist/aos.css';

const RoommateCard = ({ image, title, location, price, people, date, avatar, author, time }) => {
  return (
    
    <div className="roommate-card">
      <div className="roommate-image-container">
        <img src={image} alt={title} className="roommate-image" />
      </div>
      <h3 className="roommate-title">{title}</h3>
      
      <div className="roommate-tags">
        <div className="tag location-tag">
          {location}
        </div>
        <div className="tag price-tag">
          {price}
        </div>
      </div>
      
      <div className="roommate-tags">
        <div className="tag people-tag">
          {people}
        </div>
        <div className="tag date-tag">
          {date}
        </div>
      </div>
      
      <div className="roommate-author">
        <div className="author-info">
          <img src={avatar} alt={author} className="author-avatar" />
          <div className="author-details">
            <div className="author-name">{author}</div>
            <div className="post-time">{time}</div>
          </div>
        </div>
        <div className="action-buttons">
          <button className="message-btn">Nhắn Tin</button>
          <button className="save-btn">
            <i className="bookmark-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Roommate = () => {
  const topRef = useRef(null);
  const [activePage, setActivePage] = useState(1);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    budget: '',
    roomType: '',
    timeframe: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('roommates');
  const [scrolled, setScrolled] = useState(false);
  
  // Xử lý scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Xử lý toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Xử lý click navigation
  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setIsMenuOpen(false);
  };

  // Mẫu dữ liệu roommate
  const roommateData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe',
      title: 'Cần Tìm Gấp Một Bạn Nữ Ở Ghép Phòng Tại Chung Cư ...',
      location: 'Hà Nội',
      price: '1-2 triệu',
      people: 'Chung cư, 3 người',
      date: 'Từ 01/01/2025',
      avatar: 'https://i.pinimg.com/474x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg',
      author: 'Nguyễn Văn A',
      time: '2 giờ trước'
    }
  ];

  // Xử lý thay đổi trang
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    document.documentElement.scrollTop = 0; // Scroll to top immediately
    // Bạn có thể thêm xử lý tải dữ liệu trang mới ở đây
  };

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: value
    });
  };

  // Xử lý nút tìm kiếm
  const handleSearch = () => {
    // Xử lý tìm kiếm với bộ lọc
    console.log('Search with filters:', searchFilters);
  };

  return (
    <div className="roommate-page" ref={topRef}>
      <Header 
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleNavClick={handleNavClick}
        activeNav={activeNav}
      />
      <div className="hero-section">
        <div className="hero-content">
          <div className="search-container">
            <div className="search-tabs">
              <div className="search-tab">
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Vị trí" 
                  value={searchFilters.location}
                  onChange={handleFilterChange}
                  className="search-input"
                />
              </div>
              <div className="search-tab">
                <input 
                  type="text" 
                  name="budget" 
                  placeholder="Ngân sách" 
                  value={searchFilters.budget}
                  onChange={handleFilterChange}
                  className="search-input"
                />
              </div>
              <div className="search-tab">
                <input 
                  type="text" 
                  name="roomType" 
                  placeholder="Loại phòng" 
                  value={searchFilters.roomType}
                  onChange={handleFilterChange}
                  className="search-input"
                />
              </div>
              <div className="search-tab">
                <input 
                  type="text" 
                  name="timeframe" 
                  placeholder="Thời gian" 
                  value={searchFilters.timeframe}
                  onChange={handleFilterChange}
                  className="search-input"
                />
              </div>
              <button className="search-button" onClick={handleSearch}>
                <i className="search-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="roommate-container">
        <div className="roommate-grid">
          {roommateData.map(roommate => (
            <RoommateCard
              key={roommate.id}
              image={roommate.image}
              title={roommate.title}
              location={roommate.location}
              price={roommate.price}
              people={roommate.people}
              date={roommate.date}
              avatar={roommate.avatar}
              author={roommate.author}
              time={roommate.time}
            />
          ))}
        </div>

        <div className="pagination">
          <button 
            className={`pagination-dot ${activePage === 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(1)}
          ></button>
          <button 
            className={`pagination-dot ${activePage === 2 ? 'active' : ''}`}
            onClick={() => handlePageChange(2)}
          ></button>
          <button 
            className={`pagination-dot ${activePage === 3 ? 'active' : ''}`}
            onClick={() => handlePageChange(3)}
          ></button>
          <button 
            className={`pagination-dot ${activePage === 4 ? 'active' : ''}`}
            onClick={() => handlePageChange(4)}
          ></button>
          <button 
            className={`pagination-dot ${activePage === 5 ? 'active' : ''}`}
            onClick={() => handlePageChange(5)}
          ></button>
          <button className="pagination-next" onClick={() => handlePageChange(activePage + 1)}>
            <i className="next-icon">›</i>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Roommate;
