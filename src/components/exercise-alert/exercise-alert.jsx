import React from 'react';

import './exercise-alert.css';

const ExerciseAlert = ({title, language, difficulty, description}) => {
  return (
    <div className="exercise-alert alert alert-info mx-3" role="alert">
      <h4 className="alert-heading text-center">{title}</h4>
      <p>{description}</p>
      <hr/>
      <p className="mb-0">{`${language} (${difficulty})`}</p>
    </div>
  );
}

export default ExerciseAlert;
