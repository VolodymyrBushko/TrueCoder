import React from 'react';

import './submit-button.css';

const SubmitButton = ({label}) => {
  return (
    <div className="submit-button text-center">
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    </div>
  );
}

export default SubmitButton;
