import React from 'react';
import { CertificationStep as StepType } from '../../types';

type CertificationStepProps = {
  step: StepType;
};

const CertificationStep: React.FC<CertificationStepProps> = ({ step }) => {
  return (
    <div className="certification-step">
      <div className={`step-indicator ${step.completed ? 'completed' : ''}`}>
        {step.completed ? '✓' : step.id}
      </div>
      <div className="step-content">
        <h4 className="step-title">{step.title}</h4>
        <p className="step-description">{step.description}</p>
      </div>
      <div className="step-status">
        {step.completed ? 'Completed' : 'In Progress'}
      </div>
    </div>
  );
};

export default CertificationStep;