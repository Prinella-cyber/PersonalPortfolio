"use client"

import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data/experiences';
import Link from 'next/link';
import './experience-section.css';

const ExperienceSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  // Get all unique skills across experiences
  const allSkills = Array.from(new Set(experiences.flatMap(exp => exp.skills)));
  
  // Filter experiences based on selected skill
  const filteredExperiences = selectedSkill 
    ? experiences.filter(exp => exp.skills.includes(selectedSkill))
    : experiences;
  
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">My professional journey and accomplishments</p>
      
      <div className="experience-filters">
        <h3 className="filter-title">Filter by skill:</h3>
        <div className="skill-filters">
          <button
            className={`skill-filter ${selectedSkill === null ? 'active' : ''}`}
            onClick={() => setSelectedSkill(null)}
          >
            All
          </button>
          {allSkills.map(skill => (
            <button
              key={skill}
              className={`skill-filter ${selectedSkill === skill ? 'active' : ''}`}
              onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      
      <div className="experience-timeline">
        {filteredExperiences.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
      
      <div className="experience-link-container">
        <Link href="/experience" className="view-all-link">
          View Full Timeline
          <span className="arrow-icon">→</span>
        </Link>
      </div>
    </section>
  );
};

export default ExperienceSection;