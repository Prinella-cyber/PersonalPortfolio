import { Metadata } from 'next';
import { projects } from '../../../data/projects';
import ProjectDetails from '../ProjectDetails';
import { notFound } from 'next/navigation';
import './project.css';

export async function generateMetadata({ params }: { params: { projectId: string } }): Promise<Metadata> {
  const projectId = params.projectId;
  const project = projects.find((p) => p.id.toString() === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Prisca Onyebuchi`,
    description: project.description,
    keywords: project.technologies.join(', '),
    openGraph: {
      title: `${project.title} | Prisca Onyebuchi's Portfolio`,
      description: project.description,
      images: [{
        url: '/images/project-og-image.jpg',
        width: 1200,
        height: 630,
        alt: project.title,
      }],
    },
  };
}

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const projectId = params.projectId;
  const project = projects.find((p) => p.id.toString() === projectId);
  
  if (!project) {
    notFound();
  }
  
  return <ProjectDetails project={project} />;
}