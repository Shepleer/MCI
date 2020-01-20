import React from "react";

const OptionalInput = ({ radioValue, id, name, checkedValue, value, onChange, label }) => {
  return (
    <div>
      <div className="radio-item">
        <input type="radio" id={id} value={radioValue} checked={checkedValue === name}
               onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <input name={name} type="tel" className="one-line-input" value={value} disabled={checkedValue !== name} onChange={onChange} />
    </div>
  );
};

export default OptionalInput;