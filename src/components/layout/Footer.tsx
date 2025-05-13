import React from 'react';
import Image from 'next/image';
import { projects } from '../../data/projects';
import { techLogos, getAllUniqueTechnologies } from '../../data/techLogos';
import './footer.css';

const Footer: React.FC = () => {
  const allTechnologies = getAllUniqueTechnologies(
    projects.map(project => project.technologies)
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title connect">Let&apos;s Connect</h3>
          <div className="social-links">
            <a href="https://github.com/Prinella-cyber" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/prisca-onyebuchi-725948226/" className="social-link">LinkedIn</a>
            <a href="mailto:prinellacyber@gmail.com?subject=Hello&body=I'd like to get in touch!" className="social-link">Email</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title tech-used">Technologies Used</h3>
          <div className="tech-logos">
            {allTechnologies.map(tech => (
              techLogos[tech] ? (
                <div key={tech} className="tech-logo">
                  <Image 
                    src={techLogos[tech]} 
                    alt={`${tech} logo`}
                    height={40}
                    width={40}
                    className="tech-logo-image" 
                  />
                  <span className="tech-logo-text">{tech}</span>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 DevPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;