import React from 'react';
import CertificationStep from './CertificationStep';
import { certification } from '../../data/certification';
import { getProgressWidth } from '../../utils/helpers';

const CertificationSection: React.FC = () => {
  return (
    <section id="certification" className="certification">
      <h2 className="section-title">Certification Journey</h2>
      <p className="section-subtitle">Tracking my path to {certification.title}</p>
      
      <div className="certification-container">
        <div className="certification-header">
          <div className="certification-icon">🔐</div>
          <div className="certification-info">
            <h3 className="certification-title">{certification.title}</h3>
            <p className="certification-provider">Provider: {certification.provider}</p>
            <div className="certification-progress-container">
              <div 
                className="certification-progress-bar" 
                style={{ width: getProgressWidth(certification.progress) }}
              ></div>
              <span className="certification-progress-text">
                {certification.progress}% Complete
              </span>
            </div>
          </div>
        </div>
        
        <div className="certification-steps">
          {certification.steps.map(step => (
            <CertificationStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;