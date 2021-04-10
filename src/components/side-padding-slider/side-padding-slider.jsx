import React from 'react';

import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import './side-padding-slider.css';

const SidePaddingSlider = () => {

  const imageUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--rPvSn38T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/h2917prj7ldo0ow5x5ih.png';
  const options = {
    type: 'loop',
    autoplay: true,
    resetProgress: false,
    arrows: '',
    autoWidth: true,
    focus: 'center',
    height: '20rem'
  };

  return (
    <Splide options={options}>
      <SplideSlide>
        <img src={imageUrl} alt="Image 1" className="slider-image"/>
      </SplideSlide>
      <SplideSlide>
        <img src={imageUrl} alt="Image 2" className="slider-image"/>
      </SplideSlide>
      <SplideSlide>
        <img src={imageUrl} alt="Image 3" className="slider-image"/>
      </SplideSlide>
    </Splide>
  );
}

export default SidePaddingSlider;
