import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [videoType, setVideoType] = useState<'short' | 'long'>('short');

  const toggleProject = (projectId: number) => {
    setActiveProject(projectId === activeProject ? null : projectId);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
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
  );
};

export default ProjectsSection;