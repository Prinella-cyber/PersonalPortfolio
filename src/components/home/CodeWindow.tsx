import React from 'react';
import './code-window.css';

const CodeWindow: React.FC = () => {
  return (
    <div className="code-window">
      <div className="code-header">
        <div className="code-dot red"></div>
        <div className="code-dot yellow"></div>
        <div className="code-dot green"></div>
        <span className="code-filename">portfolio.tsx</span>
      </div>
      <div className="code-content">
        <pre>{`const Developer = () => {
            const skills = ['NextJS', 'React', 'TypeScript'];
            const passion = 'Building intuitive interfaces';
            
            return (
                <Portfolio 
                skills={skills}
                passion={passion}
                available={true}
                />
            );
        }`}</pre>
      </div>
    </div>
  );
};

export default CodeWindow;