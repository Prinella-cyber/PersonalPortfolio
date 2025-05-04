import React from 'react';
import { Project } from '../../types';

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  videoType: 'short' | 'long';
  onToggle: () => void;
  onVideoTypeChange: (type: 'short' | 'long') => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  videoType,
  onToggle,
  onVideoTypeChange
}) => {
  return (
    <div 
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={onToggle}
    >
      <div className="project-image">
        <div className="project-image-placeholder" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {isActive && (
          <div className="project-details">
            <div className="project-video-controls">
              <button 
                className={`video-toggle ${videoType === 'short' ? 'active' : ''}`}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  onVideoTypeChange('short'); 
                }}
              >
                Short Demo
              </button>
              <button 
                className={`video-toggle ${videoType === 'long' ? 'active' : ''}`}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  onVideoTypeChange('long'); 
                }}
              >
                Full Video
              </button>
            </div>
            <div className="project-video-container">
              <div className="project-video-placeholder">
                <span>{videoType === 'short' ? 'Short' : 'Long'} video would play here</span>
              </div>
            </div>
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;