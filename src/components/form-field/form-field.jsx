import React from 'react';

import './form-field.css';

const FormField = ({id, name, label, placeholder, type, onChange, useTextarea = false, error = null}) => {
  return (
    <div className="form-field">
      <label htmlFor={name} className="label">{label}:</label>
      {
        useTextarea ?
          <textarea id={id} name={name} placeholder={placeholder} className="field form-control" rows={6} onChange={onChange}/> :
          <input type={type} placeholder={placeholder} id={id} name={name} className="field form-control" onChange={onChange}/>
      }
      <p className="error">{error}</p>
    </div>
  );
}

export default FormField;
