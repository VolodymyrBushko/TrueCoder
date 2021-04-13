import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './slider.css';

import cppImage from './images/cpp_image.jpg';

const Slider = () => {

  const options = {
    type: 'loop',
    arrows: false,
    height: '400px',
    focus: 'center'
  };

  return (
    <div className="slider">
      <Splide options={options}>
        <SplideSlide>
          <img src={cppImage} alt="splide-slide" style={{width: '100%', height: '100%'}}/>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
