import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">DevPortfolio</span>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#certification">Certification</Link></li>
          <li><Link href="#blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;