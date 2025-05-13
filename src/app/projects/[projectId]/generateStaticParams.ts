import { projects } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id.toString(),
  }));
}