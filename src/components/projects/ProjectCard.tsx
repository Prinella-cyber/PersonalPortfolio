import React from 'react';
import Link from 'next/link';
import { Project } from '../../types';
import './projects.css';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`} className="project-card-link">
      <div className="project-card">
        <div className="project-image">
          <div className="project-image-placeholder" />
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="tech-tags">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-tag">+{project.technologies.length - 3}</span>
            )}
          </div>
          
          <div className="view-project">
            <span className="view-project-text">View Project</span>
            <span className="view-project-arrow">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;