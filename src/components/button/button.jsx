import React from 'react';

import './button.css';

const Button = ({title, color, type = "button"}) => {
  return (
    <div className="button-wrap text-center p-3 mt-3">
      <button type={type} className={`button btn btn-outline-${color}`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
