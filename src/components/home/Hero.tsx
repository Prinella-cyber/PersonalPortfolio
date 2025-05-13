import React from 'react';
import Link from 'next/link';
import CodeWindow from './CodeWindow';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Building</span> the future, 
          <span className="highlight">one line</span> of code at a time
        </h1>
        <p className="hero-subtitle">
          Full-stack developer specializing in interactive applications and secure systems
        </p>
        <div className="hero-cta">
          <Link href="/projects" className="button primary">View Projects</Link>
          <Link href="/contact" className="button secondary">Contact Me</Link>
        </div>
      </div>
      <div className="hero-image">
        <CodeWindow />
      </div>
    </section>
  );
};

export default Hero;