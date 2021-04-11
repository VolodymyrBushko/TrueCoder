import React from 'react';

import Row from '../../components/row';
import Monitor from '../../components/monitor';
import Note from '../../components/note';

import './execute-exercise-page.css';

const ExecuteExercisePage = () => {
  return (
    <div className="execute-exercise-page container">

      <Row left={<Note text={'hello note'} textColor={'text-dark'}/>}/>
      <Row left={<Monitor/>}/>

    </div>
  );
}

export default ExecuteExercisePage;
