import React, { useState, useEffect } from 'react'
import DesktopWarning from './components/DesktopWarn';
import Outlet from './pages/Outlet';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

const App = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <>
      {location.pathname === '/' && <Navbar />}
      {
        isMobile ? <Outlet /> : <DesktopWarning />
      }

    </>
  )
}

export default App