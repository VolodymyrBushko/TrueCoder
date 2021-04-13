import React from 'react';

import './code-output-result.css';

const CodeOutputResult = props => {

  const {output, hasError} = props.output;
  const colorStyle = hasError ? 'danger' : 'success';

  return (
    <div className={`code-output-result alert mx-3 alert-${colorStyle}`} role="alert">
      {hasError ? `Error: ${output}` : `Success: ${output}`}
    </div>
  );
}

export default CodeOutputResult;
