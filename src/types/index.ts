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
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
};

export type TourStep = {
    id: number;
    title: string;
    description: string;
    targetId: string;
};