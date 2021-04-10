import React from 'react';

import './play-button.css';

import icon from './play-icon.png';

const PlayButton = () => {
  return (
    <button className="play-button">
      <img src={icon} alt="icon" className="icon"/>
    </button>
  );
}

export default PlayButton;
