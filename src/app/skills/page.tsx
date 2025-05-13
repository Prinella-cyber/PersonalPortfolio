import React from 'react';
import { skills } from '../../data/skills';
import SkillCard from '../../components/skills/SkillCard';

export default function SkillsPage() {
  return (
    <main>
      <section className="skills">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">Technologies I&apos;m proficient in</p>
        
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  );
}