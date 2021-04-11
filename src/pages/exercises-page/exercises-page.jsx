import React from 'react';

import ExercisesList from '../../components/exercises-list';
import LanguageAbout from '../../components/language-about';

import './exercises-page.css';

import images from './images';

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
      <LanguageAbout image={images[0]} title={'Programming language C++'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
      <ExercisesList exercises={exercises}/>
    </div>
  );
}

export default ExercisesPage;
