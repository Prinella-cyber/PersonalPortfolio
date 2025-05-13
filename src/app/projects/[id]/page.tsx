// src/app/projects/[id]/page.tsx
"use client"

import React, { useState } from 'react';
import { projects } from '../../../data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [videoType, setVideoType] = useState<'short' | 'long'>('short');
  
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main>
      <section className="project-detail">
        <div className="project-header">
          <h1 className="section-title">{project.title}</h1>
          <Link href="/projects" className="back-link">← Back to Projects</Link>
        </div>
        
        <div className="project-content">
          <div className="project-image-large">
            <div className="project-image-placeholder"></div>
          </div>
          
          <div className="project-info-full">
            <h2>Project Overview</h2>
            <p className="project-description">{project.description}</p>
            
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
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
      </section>
    </main>
  );
}