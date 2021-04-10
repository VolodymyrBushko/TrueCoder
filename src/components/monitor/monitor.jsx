import React from 'react';

import Row from '../row';
import CodeEditor from '../code-editor';
import Console from '../console';

import './monitor.css';

//import backgroundImage from './monitor.png';

const Monitor = () => {
  return (
    <div className="monitor container">
      <Row left={<CodeEditor/>}/>
      <Row left={<Console/>}/>
    </div>
  );
}

export default Monitor;
