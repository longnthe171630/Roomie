import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Component này sẽ bọc (wrap) các Route và tự động cuộn lên đầu trang
// khi thay đổi đường dẫn URL
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const { pathname, search } = location;
  const prevPathnameRef = useRef(pathname);
  
  // Danh sách các route không cần cuộn lên đầu trang khi thay đổi query params
  const noScrollRoutes = ['/login_register'];

  // Sử dụng useEffect để phát hiện thay đổi URL và tải lại trang
  useEffect(() => {
    // Chỉ cuộn lên đầu trang khi pathname thay đổi (chuyển trang thực sự)
    // KHÔNG cuộn khi chỉ thay đổi search params (ví dụ: khi phân trang)
    if (prevPathnameRef.current !== pathname) {
      window.scrollTo(0, 0);
      console.log('Pathname changed, scrolled to top');
      prevPathnameRef.current = pathname;
    } else {
      console.log('Only search params changed, no scrolling');
    }
  }, [pathname, search]); // Theo dõi cả pathname và search để nhận biết thay đổi

  return <>{children}</>;
};

export default RouteWrapper; 