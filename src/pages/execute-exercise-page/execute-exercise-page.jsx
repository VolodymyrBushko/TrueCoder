import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Row from '../../components/row';
import Monitor from '../../components/monitor';
import ExerciseAlert from '../../components/exercise-alert';
import CodeOutputResult from '../../components/code-output-result';

import './execute-exercise-page.css';

import ExerciseService from '../../services/exercise-service';

const exerciseService = new ExerciseService();

const ExecuteExercisePage = () => {

  const {id} = useParams();
  const [exercise, setExercise] = useState({});
  const [code, setCode] = useState('');
  const [output, setOutput] = useState({});
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    exerciseService.getExerciseById(id)
      .then(res => setExercise(res))
      .catch(err => console.log(err));
  }, []);

  const verifyCodeHandler = () => {
    setShowOutput(true);
    const userExercise = {
      code,
      language: exercise.language,
      expectedResult: exercise.expectedResult
    };
    exerciseService.verifyExercise(userExercise)
      .then(res => setOutput(res))
      .catch(err => console.log(err));
  }

  const updateCode = code => {
    setCode(code);
  }

  return (
    <div className="execute-exercise-page container">
      <Row left={<ExerciseAlert {...exercise}/>}/>
      {showOutput ? <Row left={<CodeOutputResult output={output}/>}/> : null}
      <Row left={<Monitor code={exercise.code}
                          verifyCodeHandler={verifyCodeHandler}
                          updateCode={updateCode}/>}/>
    </div>
  );
}

export default ExecuteExercisePage;
