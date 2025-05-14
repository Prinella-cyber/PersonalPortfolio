import { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "Cambium-Inc",
    role: "Technology Adoption Support Intern",
    period: "September 2022 - September 2023",
    location: "Peterborough, ON",
    description: "Supported the company's technology adoption initiatives by designing and developing custom applications, enhancing collaboration tools, and creating educational content.",
    responsibilities: [
      "Designed and developed customized applications using Power Apps and Power Automate",
      "Integrated Dataverse to manage data for applications like Vacation Request System",
      "Developed interactive dashboards and reports using Power BI",
      "Enhanced collaboration using SharePoint and Microsoft Teams",
      "Created tutorials, documentation, and video content for colleagues"
    ],
    achievements: [
      "Created a SharePoint site called 'Cambium Academy' as a knowledge base",
      "Automated the Vacation Request workflow using Power Automate",
      "Developed a field application for data collection that improved efficiency by 30%"
    ],
    skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Teams", "Power BI", "DAX", "Video Production"],
    logo: "/companies/cambium-logo.png",
    videoUrl: "/videos/cambium-experience.mp4",
    blogPostId: "cambium-learning-journey",
    testimonial: {
      text: "Prisca quickly grasped complex technologies and implemented solutions that enhanced our day-to-day operations. Her tutorials and documentation were exceptionally clear and user-friendly.",
      author: "Senior Manager of Administration",
      position: "Cambium-Inc"
    },
    links: [
      {
        title: "Company Website",
        url: "https://cambium-inc.com"
      }
    ]
  },
  {
    id: 2,
    company: "Ecenter Research",
    role: "Software Developer",
    period: "May 2024 - March 2025",
    location: "Remote",
    description: "Led the migration of a web application from Yii to Laravel, optimizing models, controllers, and database operations while enhancing the user experience.",
    responsibilities: [
      "Migrated a complex web application from Yii to Laravel",
      "Optimized models, controllers, and database migrations",
      "Developed custom Laravel Nova fields, actions, and UI components",
      "Managed complex relationships in Eloquent",
      "Customized Laravel Nova dashboards and index pages",
      "Debugged SQL queries and optimized database performance"
    ],
    achievements: [
      "Successfully translated an entire Yii application to Laravel within 3 months",
      "Improved application performance by 40% through optimization",
      "Implemented a more intuitive UI that received positive feedback from users"
    ],
    skills: ["PHP", "Laravel", "Yii", "Vue.js", "SQL", "Git", "GitHub", "Laravel Nova"],
    logo: "/companies/ecenter-logo.png",
    videoUrl: "/videos/ecenter-experience.mp4",
    blogPostId: "laravel-migration-ecenter",
    testimonial: {
      text: "Prisca's expertise in Laravel and ability to quickly understand our legacy codebase was instrumental in the successful migration of our platform. Her work significantly improved both performance and user experience.",
      author: "Cody",
      position: "Senior Developer at Ecenter Research"
    }
  },
  {
    id: 3,
    company: "Outlier",
    role: "Prompt Engineer",
    period: "February 2024 - August 2024",
    location: "Remote",
    description: "Specialized in creating and evaluating mathematical prompts to effectively train AI models, focusing on accuracy and relevance in responses.",
    responsibilities: [
      "Generated complex mathematical questions for AI training",
      "Responded to mathematical queries to build training datasets",
      "Ranked and evaluated AI-generated responses for accuracy",
      "Assessed factual correctness in mathematical contexts"
    ],
    achievements: [
      "Contributed to improving AI response accuracy in mathematics by 25%",
      "Developed a framework for evaluating mathematical reasoning in AI responses"
    ],
    skills: ["Prompt Engineering", "Mathematics", "AI Training", "Quality Assurance", "Educational Content"],
    logo: "/companies/outlier-logo.png",
    videoUrl: "/videos/outlier-experience.mp4",
    blogPostId: "ai-prompt-engineering"
  }
];