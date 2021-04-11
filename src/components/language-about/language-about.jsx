import React from 'react';

import './language-about.css';

const LanguageAbout = ({image, title, text}) => {
  return (
    <div className="language-about">
      <img src={image} alt="language about" className="image"/>
      <div className="content text-white">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default LanguageAbout;
