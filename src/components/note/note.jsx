import React from 'react';

import './note.css';

const Note = ({text}) => {
  return (
    <div className="note">
      <div className="content">
        <span className="text">
          <b>Note:</b><br/>
          {text}
        </span>
      </div>
    </div>
  );
}

export default Note;
