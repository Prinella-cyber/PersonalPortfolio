import { projects } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}