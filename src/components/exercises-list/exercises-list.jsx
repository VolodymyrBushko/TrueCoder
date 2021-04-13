import React from 'react';

import ExercisesListItem from '../exercises-list-item';

import './exercises-list.css';

const ExercisesList = ({exercises}) => {
  return (
    <div className="exercises-list-wrap">
      <ul className="content-list">
        {exercises.map(exercise =>
          <ExercisesListItem key={exercise.id} exercise={exercise}/>)}
      </ul>
    </div>
  );
}

export default ExercisesList;
