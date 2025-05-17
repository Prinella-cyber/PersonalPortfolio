"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WorkExperience } from '../../types';
import './experience-detail.css';

type ExperienceDetailProps = {
  experience: WorkExperience;
};

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  return (
    <main>
      <section className="experience-detail">
        <div className="experience-detail-header">
          <Link href="/#experience" className="back-link">← Back to Experience</Link>
          
          <div className="experience-detail-hero">
            <div className="experience-detail-company">
              <div className="experience-detail-logo-container">
                {experience.logo ? (
                  <Image 
                    src={experience.logo} 
                    alt={`${experience.company} logo`} 
                    width={100} 
                    height={100} 
                    className="experience-detail-logo" 
                  />
                ) : (
                  <div className="experience-detail-logo-text">
                    {experience.company.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <h1 className="experience-detail-title">
                {experience.role} <span className="at">at</span> {experience.company}
              </h1>
              <p className="experience-detail-period">{experience.period} | {experience.location}</p>
            </div>
          </div>
        </div>
        
        <div className="experience-detail-content">
          <div className="experience-detail-main">
            <div className="experience-detail-section">
              <h2 className="section-heading">Overview</h2>
              <p className="experience-detail-description">{experience.description}</p>
            </div>
            
            <div className="experience-detail-section">
              <h2 className="section-heading">Key Responsibilities</h2>
              <ul className="experience-detail-list">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-detail-section">
              <h2 className="section-heading">Key Achievements</h2>
              <ul className="experience-detail-list achievements">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-detail-section">
              <h2 className="section-heading">Skills Used</h2>
              <div className="skill-tags">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="experience-detail-sidebar">
            <div className="experience-detail-card">
              <h3 className="card-heading">Hear About My Experience</h3>
              <div className="experience-detail-video">
                {videoPlaying ? (
                  <video 
                    src={experience.videoUrl} 
                    controls 
                    autoPlay 
                    className="experience-video" 
                    onEnded={() => setVideoPlaying(false)}
                  ></video>
                ) : (
                  <div 
                    className="experience-video-placeholder" 
                    onClick={() => setVideoPlaying(true)}
                  >
                    <span className="play-icon">▶</span>
                    <span>Watch Video</span>
                  </div>
                )}
              </div>
            </div>
            
            {experience.testimonial && (
              <div className="experience-detail-card testimonial-card">
                <h3 className="card-heading">Testimonial</h3>
                <div className="experience-testimonial">
                  <div className="quote-mark">&quot;</div>
                  <p className="testimonial-text">{experience.testimonial.text}</p>
                  <div className="testimonial-author">
                    <p className="author-name">— {experience.testimonial.author}</p>
                    <p className="author-position">{experience.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
            
            {experience.blogPostId && (
              <div className="experience-detail-card">
                <h3 className="card-heading">Read More</h3>
                <p className="blog-preview">I&apos;ve written about my experiences and lessons learned during my time at {experience.company}.</p>
                <Link href={`/blog/${experience.blogPostId}`} className="read-blog-button">
                  Read My Blog Post
                </Link>
              </div>
            )}
            
            {experience.links && experience.links.length > 0 && (
              <div className="experience-detail-card">
                <h3 className="card-heading">Related Links</h3>
                <ul className="related-links">
                  {experience.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                        <span className="external-link-icon">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceDetail;