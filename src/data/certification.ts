import { Certification } from '../types';

export const certification: Certification = {
  id: 1,
  title: "Certified Information Systems Security Professional (CISSP)",
  provider: "ISC²",
  progress: 62.5,
  steps: [
    {
      id: 1,
      title: "Security and Risk Management",
      completed: true,
      description: "Mastering security concepts, principles, and compliance requirements."
    },
    {
      id: 2,
      title: "Asset Security",
      completed: true,
      description: "Understanding data classification, ownership, and protection methods."
    },
    {
      id: 3,
      title: "Security Architecture and Engineering",
      completed: true,
      description: "Learning secure design principles and security models."
    },
    {
      id: 4,
      title: "Communication and Network Security",
      completed: true,
      description: "Studying secure network architecture and network components."
    },
    {
      id: 5,
      title: "Identity and Access Management",
      completed: true,
      description: "Managing identification, authentication, and access control."
    },
    {
      id: 6,
      title: "Security Assessment and Testing",
      completed: false,
      description: "Conducting security control testing and vulnerability assessments."
    },
    {
      id: 7,
      title: "Security Operations",
      completed: false,
      description: "Implementing incident management and disaster recovery."
    },
    {
      id: 8,
      title: "Software Development Security",
      completed: false,
      description: "Applying security in the SDLC and understanding security controls."
    }
  ],
  image: "/certifications/cissp.png"
};