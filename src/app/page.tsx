// src/app/page.tsx
'use client';

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TourGuide from '../components/layout/TourGuide';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/projects/ProjectsSection';
import SkillsSection from '../components/skills/SkillsSection';
import CertificationSection from '../components/certification/CertificationSection';
import BlogSection from '../components/blog/BlogSection';
import { useTour } from '../hooks/useTour';

export default function Home() {
  const { 
    showTour,
    showTourPrompt,
    tourStep,
    startTour,
    skipTour,
    nextStep,
    prevStep,
    goToStep,
    endTour,
    currentTourStep
  } = useTour();

  return (
    <div className="portfolio">
      <TourGuide 
        showTour={showTour}
        showTourPrompt={showTourPrompt}
        tourStep={tourStep}
        startTour={startTour}
        skipTour={skipTour}
        nextStep={nextStep}
        prevStep={prevStep}
        goToStep={goToStep}
        endTour={endTour}
        currentTourStep={currentTourStep}
      />
      
      <Header />
      
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <CertificationSection />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
}