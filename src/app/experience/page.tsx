import { Metadata } from 'next';
import { experiences } from '../../data/experiences';
import ExperienceTimeline from '../../components/experience/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'Work Experience | Prisca Onyebuchi',
  description: 'Explore my professional journey and work experience in technology and software development.',
};

export default function ExperiencePage() {
    // Calculate some stats from experiences
    const totalMonths = experiences.reduce((total, exp) => {
      // Simplified calculation - in real implementation, you would parse actual dates
      const duration = exp.period.includes('-') 
        ? 12 // Assume one year for simplification
        : 3; // Assume 3 months for current positions
      return total + duration;
    }, 0);
    
    const totalSkills = new Set(experiences.flatMap(exp => exp.skills)).size;
    
    return (
      <main>
        <section className="experience-page">
          <h1 className="section-title">Professional Journey</h1>
          <p className="section-subtitle">Explore my work experience and professional growth</p>
          
          <div className="experience-stats">
            <div className="stat-card">
              <div className="stat-number">{experiences.length}</div>
              <div className="stat-label">Positions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{Math.round(totalMonths / 12)}.{totalMonths % 12}</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{totalSkills}</div>
              <div className="stat-label">Skills Acquired</div>
            </div>
          </div>
          
          <ExperienceTimeline experiences={experiences} />
          
          <div className="experience-overview">
            <h2 className="overview-title">Skills & Expertise</h2>
            <div className="skills-overview">
              {Array.from(new Set(experiences.flatMap(exp => exp.skills))).map(skill => (
                <span key={skill} className="skill-tag highlight">{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
}