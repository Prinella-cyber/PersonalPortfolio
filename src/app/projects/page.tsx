"use client"

import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/projects/ProjectCard';

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [videoType, setVideoType] = useState<'short' | 'long'>('short');

  const toggleProject = (projectId: number) => {
    setActiveProject(projectId === activeProject ? null : projectId);
  };

  return (
    <main>
      <section className="projects">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Explore my recent work</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              videoType={videoType}
              onToggle={() => toggleProject(project.id)}
              onVideoTypeChange={setVideoType}
            />
          ))}
        </div>
      </section>
    </main>
  );
}