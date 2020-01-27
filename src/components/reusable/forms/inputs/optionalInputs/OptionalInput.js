import React from "react";

const OptionalInput = ({ radioValue, id=undefined, error, name, checkedValue, value, onChange, label, placeholder }) => {
  return (
    <div className="optional-input-wrapper">
      <div className="radio-item">
        <input type="radio" id={id} value={radioValue} checked={checkedValue === name}
               onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <input name={name} type="tel" placeholder={placeholder} className={`one-line-input ${error ? 'input-error-active' : ''}`} value={value} disabled={checkedValue !== name} onChange={onChange} />
      {error && <p className="input-error-label">{error}</p>}
    </div>
  );
};

export default OptionalInput;
