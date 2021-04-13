import React from 'react';

import PlayButton from '../play-button';
import CodeEditorWindow from '../code-editor-window';

import './code-editor.css';

const CodeEditor = ({code}) => {
  return (
    <div className="code-editor">
      <PlayButton/>
      <CodeEditorWindow code={code}/>
    </div>
  );
}

export default CodeEditor;
