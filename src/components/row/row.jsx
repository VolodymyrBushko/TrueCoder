import React from 'react';

import './row.css';

const Row = ({left, right, sizeL = 6, sizeR = 6, defaultSize = 12}) => {

  let columnL = null;
  let columnR = null;
  let hasAllColumns = false;

  if (left && right) {
    hasAllColumns = true;
  }

  if (left) {
    columnL = (<div
      className={`col-${hasAllColumns ? sizeL : defaultSize}`}>{left}</div>);
  }
  if (right) {
    columnR = (<div
      className={`col-${hasAllColumns ? sizeR : defaultSize}`}>{right}</div>);
  }

  return (
    <div className="row">
      {columnL}
      {columnR}
    </div>
  );
}

export default Row;
