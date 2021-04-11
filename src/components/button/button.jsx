import React from 'react';

import './button.css';

const Button = ({title, color}) => {
  return (
    <div className="button-wrap text-center p-3 mt-5">
      <button type="button" className={`button btn btn-outline-${color}`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
