import React from 'react';

import Row from '../row';
import CodeEditor from '../code-editor';
import Console from '../console';

import './monitor.css';

import image from './monitor.png';

const Monitor = () => {
  return (
    <div className="monitor container" style={{backgroundImage: `url(${image})`}}>
      <Row left={<CodeEditor/>}/>
      {/*<Row left={<Console/>}/>*/}
    </div>
  );
}

export default Monitor;
