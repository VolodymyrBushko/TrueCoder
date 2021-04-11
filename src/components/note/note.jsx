import React from 'react';

import './note.css';

const Note = ({text, textColor}) => {
  return (
    <div className="note">
      <div className={`content ${textColor}`}>
        <span className="text">
          <b>Note:</b><br/>
          {text}
        </span>
      </div>
    </div>
  );
}

export default Note;
