import React from 'react';

import Note from '../note';
import Monitor from '../monitor';

import './main.css';
import Row from '../row';

const Main = () => {

  const noteText = 'Fix the following code to run it!';

  return (
    <main className="main container">
      <Note text={noteText}/>
      <Row left={<Monitor/>}/>
    </main>
  );
}

export default Main;
