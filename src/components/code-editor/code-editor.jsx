import React from 'react';

import PlayButton from '../play-button';
import CodeEditorWindow from '../code-editor-window';

import './code-editor.css';

const CodeEditor = () => {
  return (
    <div className="code-editor">
      <PlayButton/>
      <CodeEditorWindow/>
    </div>
  );
}

export default CodeEditor;
