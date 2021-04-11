import React from 'react';

import './exercises-list-item.css';

const ExercisesListItem = ({exercise}) => {
  const {id, link, title, content, difficulty} = exercise;
  const colorStyle = getColorStyle(difficulty);
  return (
    <li id={id} className="exercises-list-item">
      <a href={link} className={`link ${colorStyle}`}>
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
      </a>
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
