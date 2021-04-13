import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ExercisesList from '../../components/exercises-list';
import LanguageAbout from '../../components/language-about';
import CardList from '../../components/card-list';
import Button from '../../components/button';

import './exercises-page.css';
import images from './images';

import ExerciseService from '../../services/exercise-service';

const exerciseService = new ExerciseService();

const ExercisesPage = () => {

  const {language} = useParams();
  const [exerciseList, setExerciseList] = useState([]);
  const [cardList, setCardList] = useState([
    {
      image: '',
      title: 'Easy',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      background: 'bg-success',
      active: false
    },
    {
      image: '',
      title: 'Medium',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      background: 'bg-warning',
      active: false
    },
    {
      image: '',
      title: 'Hard',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
      background: 'bg-danger',
      active: false
    },
  ]);

  useEffect(() => {
    exerciseService.getExercises(language)
      .then(res => setExerciseList(res))
      .catch(err => console.log(err));
  }, []);

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
      <LanguageAbout image={images[0]} title={'Programming language C++'}
                     text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
      <CardList cardList={cardList} setCardActive={setCardActive}/>
      <ExercisesList exercises={filteredExerciseList}/>
      <Button title="Load more" color="info"/>
    </div>
  );
}

export default ExercisesPage;
