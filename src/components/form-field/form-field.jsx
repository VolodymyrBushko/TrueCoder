import React from 'react';

import './form-field.css';

const FormField = ({label, id, name, placeholder, type, error}) => {
  return (
    <div className="form-field">
      <label htmlFor={name} className="label">{label}:</label>
      <input type={type} placeholder={placeholder} id={id} name={name} className="field form-control"/>
      <p className="error">{error}</p>
    </div>
  );
}

export default FormField;
