// src/components/ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';
import { useLocation } from 'react-router-dom';

export default function ProgressBar() {
  const location = useLocation();


  const currentPath = location.pathname;
  
  let activeStep = 1;
  if (currentPath === '/address') activeStep = 2;
  else if (currentPath === '/accountType') activeStep = 3;
  else if (currentPath === '/display') activeStep = 4;

  return (
    <div className="step-bar">
      <div className={`step ${activeStep >= 1 ? 'completed' : ''} ${activeStep === 1 ? 'active' : ''}`}>1</div>
      <div className={`step ${activeStep >= 2 ? 'completed' : ''} ${activeStep === 2 ? 'active' : ''}`}>2</div>
      <div className={`step ${activeStep >= 3 ? 'completed' : ''} ${activeStep === 3 ? 'active' : ''}`}>3</div>
      <div className={`step ${activeStep >= 4 ? 'completed' : ''} ${activeStep === 4 ? 'active' : ''}`}>4</div>
    </div>
  );
}
