import React from 'react';

import Note from '../../components/note';
import Monitor from '../../components/monitor';
import Row from '../../components/row';

import './home-page.css';

const HomePage = () => {

  const noteText = 'Fix the following code to run it!';

  return (
    <main className="main container">
      <Note text={noteText}/>
      <Row left={<Monitor/>}/>
    </main>
  );
}

export default HomePage;
