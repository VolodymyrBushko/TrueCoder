import React from 'react';

import CodeEditorWindow from '../code-editor-window';

import './code-editor.css';

const CodeEditor = ({code, updateCode}) => {
  return (
    <div className="code-editor">
      <CodeEditorWindow code={code} updateCode={updateCode}/>
    </div>
  );
}

export default CodeEditor;
