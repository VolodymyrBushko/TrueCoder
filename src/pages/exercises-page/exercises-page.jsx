import React from 'react';

import ExercisesList from '../../components/exercises-list';

import './exercises-page.css';

const ExercisesPage = () => {
  const exercises = [
    {id: 1, link: '#', title: 'title-1', content: 'content-1', difficulty: 'easy'},
    {id: 2, link: '#', title: 'title-2', content: 'content-2', difficulty: 'medium'},
    {id: 3, link: '#', title: 'title-3', content: 'content-3', difficulty: 'hard'},
    {id: 4, link: '#', title: 'title-4', content: 'content-4', difficulty: 'easy'},
    {id: 5, link: '#', title: 'title-5', content: 'content-5', difficulty: 'medium'},
  ];
  return (
    <div className="exercises-page container">
      <ExercisesList exercises={exercises}/>
    </div>
  );
}

export default ExercisesPage;
