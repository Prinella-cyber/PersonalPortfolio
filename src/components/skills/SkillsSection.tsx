import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills in Progress</h2>
      <p className="section-subtitle">Technologies I&apos;m currently learning</p>
      
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;