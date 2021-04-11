import React from 'react';

import PlayButton from '../play-button';
import CodeEditorWindow from '../code-editor-window';

import './code-editor.css';

// 14
const CodeEditor = () => {
  return (
    <div className="code-editor">
      <PlayButton/>
      <CodeEditorWindow language={'javascript'}/>
    </div>
  );
}

export default CodeEditor;
