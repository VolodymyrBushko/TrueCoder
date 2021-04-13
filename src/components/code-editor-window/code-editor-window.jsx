import React, {useEffect} from 'react';

import './code-editor-window.css';

const CodeEditorWindow = ({code, updateCode}) => {

  useEffect(() => {

    // eslint-disable-next-line no-undef
    const editor = ace.edit('editor');
    editor.setTheme('ace/theme/dracula');
    editor.session.setMode('ace/mode/java');

    editor.session.on('change', () => {
      updateCode(editor.getValue());
    });

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
