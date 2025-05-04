import { useState, useEffect } from 'react';

type TourStep = {
  id: number;
  title: string;
  description: string;
  targetId: string;
};

export const tourSteps: TourStep[] = [
  {
    id: 1,
    title: "Welcome to my Portfolio!",
    description: "This is where I showcase my projects and skills.",
    targetId: "hero"
  },
  {
    id: 2,
    title: "My Projects",
    description: "Browse through my recent work with video demonstrations.",
    targetId: "projects"
  },
  {
    id: 3,
    title: "Skills in Progress",
    description: "These are the technologies I'm currently learning.",
    targetId: "skills"
  },
  {
    id: 4,
    title: "Certification Journey",
    description: "Follow my progress towards professional certifications.",
    targetId: "certification"
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "Read my thoughts on technology and development.",
    targetId: "blog"
  }
];

export const useTour = () => {
  const [showTour, setShowTour] = useState<boolean>(false);
  const [showTourPrompt, setShowTourPrompt] = useState<boolean>(true);
  const [tourStep, setTourStep] = useState<number>(0);

  useEffect(() => {
    if (showTour && tourSteps[tourStep]) {
      const element = document.getElementById(tourSteps[tourStep].targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [tourStep, showTour]);

  const startTour = () => {
    setShowTour(true);
    setShowTourPrompt(false);
    setTourStep(0);
  };

  const skipTour = () => {
    setShowTourPrompt(false);
    setShowTour(false);
  };

  const nextStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(prev => prev + 1);
    } else {
      setShowTour(false);
    }
  };

  const prevStep = () => {
    if (tourStep > 0) {
      setTourStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < tourSteps.length) {
      setTourStep(step);
    }
  };

  const endTour = () => {
    setShowTour(false);
  };

  return {
    showTour,
    showTourPrompt,
    tourStep,
    startTour,
    skipTour,
    nextStep,
    prevStep,
    goToStep,
    endTour,
    currentTourStep: tourSteps[tourStep]
  };
};