// (Client Component)
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '../../types';

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [videoType, setVideoType] = useState<'short' | 'long'>('short');
  
  return (
    <main>
        <section className="project-detail">
            <div className="project-header">
                <Link href="/projects" className="back-link">← Back to Projects</Link>
            </div>
        
            <h1 className="project-detail-title">{project.title}</h1>
            
            <div className="project-content">
                <div className="project-gallery">
                <div className="project-image-large">
                    <div className="project-image-placeholder"></div>
                </div>
                
                <div className="project-video-section">
                    <h2>Project Demo</h2>
                    <div className="project-video-controls">
                    <button 
                        className={`video-toggle ${videoType === 'short' ? 'active' : ''}`}
                        onClick={() => setVideoType('short')}
                    >
                        Short Demo
                    </button>
                    <button 
                        className={`video-toggle ${videoType === 'long' ? 'active' : ''}`}
                        onClick={() => setVideoType('long')}
                    >
                        Full Video
                    </button>
                    </div>
                    <div className="project-video-container project-video-large">
                    <div className="project-video-placeholder">
                        <span>{videoType === 'short' ? 'Short' : 'Long'} video would play here</span>
                    </div>
                    </div>
                </div>
                </div>
                
                <div className="project-details-content">
                <div className="project-section">
                    <h2>Project Overview</h2>
                    <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                    {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    </div>
                </div>
                
                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul className="feature-list">
                    <li>Feature 1: Description of a key feature of this project</li>
                    <li>Feature 2: Another important aspect of the project</li>
                    <li>Feature 3: Something else noteworthy about the project</li>
                    </ul>
                </div>
                
                <div className="project-links">
                    {project.liveUrl && (
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button primary"
                    >
                        View Live Demo
                    </a>
                    )}
                    {project.githubUrl && (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button secondary"
                    >
                        View Code
                    </a>
                    )}
                </div>
                </div>
            </div>
        </section>
    </main>
  );
}