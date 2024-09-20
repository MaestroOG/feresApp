import React, { useState, useEffect } from 'react'
import DesktopWarning from './components/DesktopWarn';
import Outlet from './pages/Outlet';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

const App = () => {

  const isMobile = useIsMobile();

  return (
    <>
      {
        isMobile ? <Outlet /> : <DesktopWarning />
      }

    </>
  )
}

export default App