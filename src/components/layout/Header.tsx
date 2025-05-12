import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="logo-text">DevPortfolio</span>
        </div>
        
        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="#hero" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="#certification" onClick={() => setMenuOpen(false)}>Certification</Link></li>
            <li><Link href="#blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          </ul>
        </nav>
      </header>

      <div 
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;