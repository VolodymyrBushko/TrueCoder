import React from 'react';

import Row from '../row';
import CodeEditor from '../code-editor';
import PlayButton from '../play-button';

import './monitor.css';

import image from './monitor.png';

const Monitor = ({code, verifyCodeHandler, updateCode}) => {
  return (
    <div className="monitor container" style={{backgroundImage: `url(${image})`}}>
      <PlayButton verifyCodeHandler={verifyCodeHandler}/>
      <Row left={<CodeEditor code={code} updateCode={updateCode}/>}/>
    </div>
  );
}

export default Monitor;
