import React from 'react';
import { Skill } from '../../types';
import { getProgressWidth } from '../../utils/helpers';

type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-name">{skill.name}</h3>
      <div className="skill-progress-container">
        <div 
          className="skill-progress-bar" 
          style={{ width: getProgressWidth(skill.progress) }}
        ></div>
        <span className="skill-progress-text">{skill.progress}%</span>
      </div>
    </div>
  );
};

export default SkillCard;