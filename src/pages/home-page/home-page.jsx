import React from 'react';

import Note from '../../components/note';
import Monitor from '../../components/monitor';
import Row from '../../components/row';
import LanguageAbout from '../../components/language-about';

import './home-page.css';

import image from './images/programmer.png';

const HomePage = () => {
  const noteText = 'Fix the following code to run it!';
  return (
    <main className="main container">
      <Row left={<LanguageAbout title={'About TrueCoder'} image={image}
                                text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.' +
                                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' +
                                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' +
                                'There are many variations of passages of Lorem'}/>}/>
      <Row left={<Note text={noteText}/>}/>
      <Row left={<Monitor/>}/>
    </main>
  );
}

export default HomePage;
