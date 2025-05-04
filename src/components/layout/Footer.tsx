import React from 'react';
import { projects } from '../../data/projects';
import { techLogos, getAllUniqueTechnologies } from '../../data/techLogos';

const Footer: React.FC = () => {
  const allTechnologies = getAllUniqueTechnologies(
    projects.map(project => project.technologies)
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title connect">Let's Connect</h3>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Email</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title tech-used">Technologies Used</h3>
          <div className="tech-logos">
            {allTechnologies.map(tech => (
              techLogos[tech] ? (
                <div key={tech} className="tech-logo">
                  <img 
                    src={techLogos[tech]} 
                    alt={`${tech} logo`} 
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