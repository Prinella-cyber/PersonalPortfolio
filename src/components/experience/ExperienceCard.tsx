"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WorkExperience } from '../../types';
import './experience-card.css';

type ExperienceCardProps = {
  experience: WorkExperience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`experience-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="experience-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="experience-logo-container">
          {/* Use a placeholder if no logo available */}
          <div className="experience-logo-placeholder">
            {experience.logo ? (
              <Image 
                src={experience.logo} 
                alt={`${experience.company} logo`} 
                width={60} 
                height={60} 
                className="experience-logo" 
              />
            ) : (
              <div className="experience-logo-text">
                {experience.company.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>
        </div>
        
        <div className="experience-title-container">
          <h3 className="experience-role">{experience.role}</h3>
          <p className="experience-company">{experience.company}</p>
          <p className="experience-period">{experience.period} | {experience.location}</p>
        </div>
        
        <div className="experience-expand-icon">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
      
      {isExpanded && (
        <div className="experience-content">
          <p className="experience-description">{experience.description}</p>
          
          <div className="experience-columns">
            <div className="experience-left-column">
              <div className="experience-section">
                <h4>Key Responsibilities</h4>
                <ul className="experience-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              <div className="experience-section">
                <h4>Key Achievements</h4>
                <ul className="experience-list achievements">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="experience-section">
                <h4>Skills Used</h4>
                <div className="skill-tags">
                  {experience.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="experience-right-column">
              <div className="experience-video-section">
                <h4>Hear About My Experience</h4>
                <div className="experience-video-container">
                  {/* Video placeholder - in production replace with actual video player */}
                  <div className="experience-video-placeholder">
                    <span className="play-icon">▶</span>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
              
              {experience.testimonial && (
                <div className="experience-testimonial">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{experience.testimonial.text}</p>
                  <div className="testimonial-author">
                    <p className="author-name">— {experience.testimonial.author}</p>
                    <p className="author-position">{experience.testimonial.position}</p>
                  </div>
                </div>
              )}
              
              <div className="experience-footer">
                {experience.blogPostId && (
                  <Link href={`/blog/${experience.blogPostId}`} className="read-blog-link">
                    Read My Blog Post
                    <span className="arrow-icon">→</span>
                  </Link>
                )}
                
                <Link href={`/experience/${experience.id}`} className="view-details-link">
                  View Full Details
                  <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;