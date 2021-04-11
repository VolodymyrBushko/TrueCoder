import React from 'react';

import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './slider.css';

import images from './images';

const Slider = () => {
  const options = {
    fixedWidth: 100,
    height: 60,
    gap: 10,
    rewind: true,
    cover: true,
    pagination: false,
    focus: 'center',
    breakpoints: {
      '600': {
        fixedWidth: 66,
        height: 40,
      }
    }
  };
  return (
    <div className="slider">
      <Splide options={options}>
        {images.map(image => (
          <SplideSlide>
            <img src={image} alt="image" className="slider-image"/>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
