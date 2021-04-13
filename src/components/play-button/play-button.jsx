import React from 'react';

import './play-button.css';

import icon from './play-icon.png';

const PlayButton = ({verifyCodeHandler}) => {
  return (
    <button className="play-button" onClick={verifyCodeHandler}>
      <img src={icon} alt="icon" className="icon"/>
    </button>
  );
}

export default PlayButton;
