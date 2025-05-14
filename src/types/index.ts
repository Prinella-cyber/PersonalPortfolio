export type ProjectVideo = {
    short: string;
    long: string;
};

export type Project = {
    id: number;
    title: string;
    description: string;
    video: ProjectVideo;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
};

export type CertificationStep = {
    id: number;
    title: string;
    completed: boolean;
    description: string;
};

export type Certification = {
    id: number;
    title: string;
    provider: string;
    progress: number;
    steps: CertificationStep[];
    image: string;
};

export type Skill = {
    id: number;
    name: string;
    progress: number;
    icon: string;
};

export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image?: string;
    relatedExperienceId?: number;
    tags: string[];
    readTime: string;
};

export type TourStep = {
    id: number;
    title: string;
    description: string;
    targetId: string;
};

export type WorkExperience = {
    id: number;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    skills: string[];
    logo: string;
    videoUrl: string;
    blogPostId?: string;
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
    images?: string[];
    links?: {
      title: string;
      url: string;
    }[];
};