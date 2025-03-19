import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
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
        <div className="tag location-tag">{location}</div>
        <div className="tag price-tag">{price}</div>
      </div>
      
      <div className="roommate-tags">
        <div className="tag people-tag">{people}</div>
        <div className="tag date-tag">{date}</div>
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

// Simple pagination component that uses URL params
const UrlPagination = ({ activePage, totalPages, onPageChange }) => {
  const handleClick = (e, page) => {
    e.preventDefault();
    e.stopPropagation(); // Ngăn chặn sự kiện lan rộng
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };
  
  return (
    <div className="pagination">
      <button 
        className="pagination-next" 
        onClick={(e) => handleClick(e, activePage - 1)}
        disabled={activePage === 1}
      >
        <i className="previous-icon">‹</i>
      </button>
      
      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index + 1}
          className={`pagination-dot ${activePage === index + 1 ? 'active' : ''}`}
          onClick={(e) => handleClick(e, index + 1)}
        ></button>
      ))}
      
      <button 
        className="pagination-next" 
        onClick={(e) => handleClick(e, activePage + 1)}
        disabled={activePage === totalPages}
      >
        <i className="next-icon">›</i>
      </button>
    </div>
  );
};

const Roommate = () => {
  const topRef = useRef(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1', 10);
  
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

  // Sử dụng URL params để theo dõi trạng thái trang
  const handlePageChange = (pageNumber) => {
    if (pageNumber === activePage) return;
    
    // Cập nhật URL với số trang mới - không cần xử lý cuộn trang ở đây nữa
    // vì RouteWrapper đã được thiết lập để không cuộn khi chỉ thay đổi search params
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', pageNumber.toString());
    setSearchParams(newParams);
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

  // Effect để xử lý dữ liệu khi trang thay đổi
  useEffect(() => {
    // Giả lập việc tải dữ liệu cho trang hiện tại
    console.log(`Loading data for page ${activePage}`);
    
    // Tải dữ liệu mới ở đây
  }, [activePage]);

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
                <select 
                  name="location" 
                  value={searchFilters.location}
                  onChange={handleFilterChange}
                  className="search-input"
                >
                  <option value="">Chọn vị trí</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Nha Trang">Nha Trang</option>
                  <option value="Huế">Huế</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                </select>
              </div>
              <div className="search-tab">
                <select 
                  name="budget" 
                  value={searchFilters.budget}
                  onChange={handleFilterChange}
                  className="search-input"
                >
                  <option value="">Chọn ngân sách</option>
                  <option value="Dưới 1 triệu">Dưới 1 triệu</option>
                  <option value="1-2 triệu">1-2 triệu</option>
                  <option value="2-3 triệu">2-3 triệu</option>
                  <option value="3-5 triệu">3-5 triệu</option>
                  <option value="Trên 5 triệu">Trên 5 triệu</option>
                </select>
              </div>
              <div className="search-tab">
                <select 
                  name="roomType" 
                  value={searchFilters.roomType}
                  onChange={handleFilterChange}
                  className="search-input"
                >
                  <option value="">Chọn loại phòng</option>
                  <option value="Chung cư">Chung cư</option>
                  <option value="Nhà nguyên căn">Nhà nguyên căn</option>
                  <option value="Phòng trọ">Phòng trọ</option>
                  <option value="Ký túc xá">Ký túc xá</option>
                  <option value="Homestay">Homestay</option>
                </select>
              </div>
              <div className="search-tab">
                <select 
                  name="timeframe" 
                  value={searchFilters.timeframe}
                  onChange={handleFilterChange}
                  className="search-input"
                >
                  <option value="">Chọn thời gian</option>
                  <option value="Ngay bây giờ">Ngay bây giờ</option>
                  <option value="Trong tháng này">Trong tháng này</option>
                  <option value="Trong 3 tháng tới">Trong 3 tháng tới</option>
                  <option value="Trên 3 tháng">Trên 3 tháng</option>
                </select>
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

        <UrlPagination 
          activePage={activePage}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Roommate;
