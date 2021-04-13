import React, {useEffect} from 'react';

import './code-editor-window.css';

const CodeEditorWindow = ({code}) => {

  useEffect(() => {

    // eslint-disable-next-line no-undef
    const editor = ace.edit('editor');
    editor.setTheme('ace/theme/dracula');
    editor.session.setMode('ace/mode/java');

    return () => {}
  }, []);

  return (
    <div className="code-edit-container">
      <div id="editor">
      </div>
    </div>
  );
}

export default CodeEditorWindow;
