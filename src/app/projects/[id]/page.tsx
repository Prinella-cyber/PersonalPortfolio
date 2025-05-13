import { Metadata } from 'next';
import { projects } from '../../../data/projects';
import ProjectDetails from '../../projects/ProjectDetails';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id.toString() === params.id);
  
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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    notFound();
  }
  
  return <ProjectDetails project={project} />;
}