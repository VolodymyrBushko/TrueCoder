import React, {useState} from 'react';

import ExercisesList from '../../components/exercises-list';
import LanguageAbout from '../../components/language-about';
import CardList from '../../components/card-list';
import Button from '../../components/button';

import './exercises-page.css';

import images from './images';

const ExercisesPage = () => {

  const [exerciseList, useExerciseList] = useState([
    {id: 1, link: '/execute-exercise', title: 'title-1', content: 'content-1', difficulty: 'easy'},
    {id: 2, link: '/execute-exercise', title: 'title-2', content: 'content-2', difficulty: 'medium'},
    {id: 3, link: '/execute-exercise', title: 'title-3', content: 'content-3', difficulty: 'hard'},
    {id: 4, link: '/execute-exercise', title: 'title-4', content: 'content-4', difficulty: 'easy'},
    {id: 5, link: '/execute-exercise', title: 'title-5', content: 'content-5', difficulty: 'medium'},
  ]);
  const [cardList, setCardList] = useState([
    {image: '', title: 'Easy', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since', background: 'bg-success', active: false},
    {image: '', title: 'Medium', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since', background: 'bg-warning', active: false},
    {image: '', title: 'Hard', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since', background: 'bg-danger', active: false},
  ]);

  const setCardActive = title => {
    const newCardList = cardList.map(card => {
      card.active = card.title === title;
      return card;
    });
    setCardList(newCardList);
  }

  const getActiveCard = cardList => {
    return cardList.find(card => card.active);
  }

  const filterActiveExerciseList = (exerciseList, cardList) => {
    const activeCard = getActiveCard(cardList);
    const activeCardTitle = activeCard ? activeCard.title.toLowerCase() : '';
    return exerciseList.filter(exercise => {
      return exercise.difficulty.toLowerCase().includes(activeCardTitle);
    });
  }

  const filteredExerciseList = filterActiveExerciseList(exerciseList, cardList);

  return (
    <div className="exercises-page container">
      <LanguageAbout image={images[0]} title={'Programming language C++'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
      <CardList cardList={cardList} setCardActive={setCardActive}/>
      <ExercisesList exercises={filteredExerciseList}/>
      <Button title="Load more" color="info"/>
    </div>
  );
}

export default ExercisesPage;
