import React, { useEffect, useState, useRef } from 'react';
import Browser from './Browser';
import './nav.css';

const Nav = () => {
  const [startLocation, setStartLocation] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  const listElementsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      currentScroll > startLocation ? setShowNav(false) : setShowNav(true);
      setStartLocation(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startLocation]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
      window.innerWidth > 767 && setMenuVisible(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => setMenuVisible(!menuVisible);

  const navStyle = {
    transition: 'top 0.3s',
    top: showNav ? '0' : '-100px',
  };

  return (
    <div className={`nav`} style={navStyle}>
      <Browser
        handleMenuClick={handleMenuClick}
        menuVisible={menuVisible}
        listElementsRef={listElementsRef}
        setMenuVisible={setMenuVisible}
      />
    </div>
  );
};

export default Nav;
