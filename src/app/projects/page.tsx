import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/projects/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Prisca Onyebuchi',
  description: 'Explore my portfolio of web development and software projects',
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="projects">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Explore my recent work</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}