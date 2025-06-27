import React, { useState } from 'react';
import './CustomInput.css'; // We'll add styles here

const CustomInput = ({ label = "Label", placeholder = "Text Input" }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (val) => {
    const num = Number(val);
    if (isNaN(num) || num < 100 || num > 1000) {
      setError("Only numbers between 100 ~ 1000 are allowed");
    } else {
      setError('');
    }
    setValue(val);
  };

  return (
    <div className="custom-input-wrapper">
      <label className="input-label">{label}</label>
      <input
        type="text"
        className={`input-box ${error ? 'error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => validate(e.target.value)}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default CustomInput;
