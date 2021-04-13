import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Row from '../../components/row';
import Monitor from '../../components/monitor';
import Note from '../../components/note';

import './execute-exercise-page.css';

import ExerciseService from '../../services/exercise-service';
const exerciseService = new ExerciseService();

const ExecuteExercisePage = () => {

  const {id} = useParams();
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    exerciseService.getExerciseById(id)
      .then(res => setExercise(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="execute-exercise-page container">
      <Row left={<Note text={exercise.description} textColor={'text-dark'}/>}/>
      <Row left={<Monitor code={exercise.code}/>}/>
    </div>
  );
}

export default ExecuteExercisePage;
