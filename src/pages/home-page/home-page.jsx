import React from 'react';

import Row from '../../components/row';
import LanguageAbout from '../../components/language-about';
import Slider from '../../components/slider';

import './home-page.css';

import image from './images/programmer.png';

const HomePage = () => {
  return (
    <main className="main container">
      <h1 className="text-center text-white mb-5">TrueCoder</h1>
      <Row left={<Slider/>}/>
      <Row left={<LanguageAbout title={'About TrueCoder'} image={image}
                                text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.' +
                                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' +
                                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' +
                                'There are many variations of passages of Lorem'}/>}/>
    </main>
  );
}

export default HomePage;
