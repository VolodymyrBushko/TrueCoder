import React from 'react';
import {Link} from 'react-router-dom';

import './exercises-list-item.css';

const ExercisesListItem = ({exercise}) => {
  const {id, title, description, difficulty} = exercise;
  const colorStyle = getColorStyle(difficulty);
  return (
    <li className="exercises-list-item">
      <Link to={`/execute-exercise/${id}`} className={`link ${colorStyle}`}>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </Link>
    </li>
  );
}

function getColorStyle(difficulty) {
  switch (difficulty) {
    case 'easy':
      return 'bg-success text-white';
    case 'medium':
      return 'bg-warning text-white';
    default:
      return 'bg-danger text-white';
  }
}

export default ExercisesListItem;
