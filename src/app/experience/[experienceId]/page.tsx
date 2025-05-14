import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { experiences } from '../../../data/experiences';
import ExperienceDetail from '../../../components/experience/ExperienceDetail';

export async function generateMetadata({ params }: { params: { experienceId: string } }): Promise<Metadata> {
  const experienceId = params.experienceId;
  const experience = experiences.find(exp => exp.id.toString() === experienceId);
  
  if (!experience) {
    return {
      title: 'Experience Not Found',
    };
  }
  
  return {
    title: `${experience.role} at ${experience.company} | Prisca Onyebuchi`,
    description: experience.description,
    keywords: experience.skills.join(', '),
  };
}

export function generateStaticParams() {
  return experiences.map(experience => ({
    experienceId: experience.id.toString(),
  }));
}

export default async function ExperiencePage({ params }: { params: { experienceId: string } }) {
  const experienceId = params.experienceId;
  const experience = experiences.find(exp => exp.id.toString() === experienceId);
  
  if (!experience) {
    notFound();
  }
  
  return <ExperienceDetail experience={experience} />;
}