import React from 'react';

import SidePaddingSlider from '../side-padding-slider';
import Monitor from '../monitor';

import './main.css';

const Main = () => {
  return (
    <main className="main container">
      <SidePaddingSlider/>
      <Monitor/>
    </main>
  );
}

export default Main;
