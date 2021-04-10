import React from 'react';

import PlayButton from '../play-button';

import './code-editor.css';

const CodeEditor = () => {
  return (
    <div className="code-editor">
      <PlayButton/>
      <textarea className="code-area" rows="14">
      </textarea>
    </div>
  );
}

export default CodeEditor;
