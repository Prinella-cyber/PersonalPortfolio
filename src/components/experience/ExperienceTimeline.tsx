import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WorkExperience } from '../../types';
import './experience-timeline.css';

type ExperienceTimelineProps = {
  experiences: WorkExperience[];
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  // Sort experiences by date, newest first
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Extract end years for comparison
    const yearA = parseInt(a.period.split('-')[1]?.trim().split(' ')[1] || '0');
    const yearB = parseInt(b.period.split('-')[1]?.trim().split(' ')[1] || '0');
    return yearB - yearA;
  });
  
  return (
    <div className="experience-timeline-full">
      {sortedExperiences.map((experience, index) => (
        <div 
          key={experience.id} 
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-logo-container">
                {experience.logo ? (
                  <Image 
                    src={experience.logo} 
                    alt={`${experience.company} logo`} 
                    width={60} 
                    height={60} 
                    className="timeline-logo" 
                  />
                ) : (
                  <div className="timeline-logo-text">
                    {experience.company.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              
              <div className="timeline-date">{experience.period}</div>
            </div>
            
            <h3 className="timeline-role">{experience.role}</h3>
            <h4 className="timeline-company">{experience.company}</h4>
            <p className="timeline-location">{experience.location}</p>
            
            <p className="timeline-description">{experience.description}</p>
            
            <div className="timeline-highlights">
              <h5 className="highlights-title">Key Highlights:</h5>
              <ul className="highlights-list">
                {experience.achievements.slice(0, 2).map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="timeline-skills">
              {experience.skills.slice(0, 5).map((skill, i) => (
                <span key={i} className="timeline-skill-tag">{skill}</span>
              ))}
              {experience.skills.length > 5 && (
                <span className="timeline-skill-more">+{experience.skills.length - 5} more</span>
              )}
            </div>
            
            <div className="timeline-actions">
              <Link href={`/experience/${experience.id}`} className="timeline-view-button">
                View Details
              </Link>
              {experience.blogPostId && (
                <Link href={`/blog/${experience.blogPostId}`} className="timeline-blog-link">
                  Read Blog Post
                  <span className="arrow-icon">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;