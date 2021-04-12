import React from 'react';

import './form-field.css';

const FormField = ({id, name, label, placeholder, type, useTextarea = false, error = null}) => {
  return (
    <div className="form-field">
      <label htmlFor={name} className="label">{label}:</label>
      {
        useTextarea ?
          <textarea id={id} name={name} placeholder={placeholder} className="field form-control" rows={6}/> :
          <input type={type} placeholder={placeholder} id={id} name={name} className="field form-control"/>
      }
      <p className="error">{error}</p>
    </div>
  );
}

export default FormField;
