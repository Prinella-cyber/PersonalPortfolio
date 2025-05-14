"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDevelopment = true;
  // const isDevelopment = process.env.NODE_ENV === 'development';
  
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
        {isDevelopment && (
          <div className="dev-indicator">DEV - This website is still in development mode and therefore contains mostly Mock Data</div>
        )}

        <div className="logo">
          <Link href="/">
            <span className="logo-text">DevPortfolio</span>
          </Link>
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
            <li>
              <Link 
                href="/" 
                className={pathname === '/' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
            <Link 
                href="/experience" 
                className={pathname.startsWith('/experience') ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={pathname === '/projects' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/certification" 
                className={pathname === '/certification' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Certification
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={pathname === '/blog' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={pathname === '/contact' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
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