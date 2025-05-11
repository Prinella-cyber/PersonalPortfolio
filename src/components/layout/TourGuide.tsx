import React from 'react';
import { tourSteps } from '../../hooks/useTour';

type TourGuideProps = {
  showTour: boolean;
  showTourPrompt: boolean;
  tourStep: number;
  startTour: () => void;
  skipTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  endTour: () => void;
  currentTourStep: {
    title: string;
    description: string;
  };
};

const TourGuide: React.FC<TourGuideProps> = ({
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
}) => {
  if (!showTourPrompt && !showTour) return null;

  return (
    <>
      {showTourPrompt && (
        <div className="tour-prompt">
          <div className="tour-prompt-content">
            <h3>Welcome to my Portfolio!</h3>
            <p>Would you like a guided tour of this site?</p>
            <div className="tour-buttons">
              <button 
                className="tour-button primary"
                onClick={startTour}
              >
                Start Tour
              </button>
              <button 
                className="tour-button secondary"
                onClick={skipTour}
              >
                Explore on my own
              </button>
            </div>
          </div>
        </div>
      )}

      {showTour && (
        <div className="tour-overlay">
          <div className="tour-box">
            <h3>{currentTourStep.title}</h3>
            <p>{currentTourStep.description}</p>
            <div className="tour-navigation">
              <button 
                disabled={tourStep === 0}
                onClick={prevStep}
              >
                Previous
              </button>
              <div className="tour-dots">
                {tourSteps.map((_, index) => (
                  <span 
                    key={index} 
                    className={`tour-dot ${index === tourStep ? 'active' : ''}`}
                    onClick={() => goToStep(index)}
                  />
                ))}
              </div>
              {tourStep < tourSteps.length - 1 ? (
                <button onClick={nextStep}>
                  Next
                </button>
              ) : (
                <button onClick={endTour}>
                  Finish Tour
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourGuide;