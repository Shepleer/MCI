import React from 'react';

const RadioInput = ({ title, error, radioName, items, checkedValue, onChange }) => {
  return (
    <fieldset className="input-fieldset radio-fieldset">
      <legend className="input-legend">{title}</legend>
      {
        items.map((item, index) => {
          const { label } = item;
          const id = `${radioName}${index}`;
          return (
            <div className="radio-item">
              <input type="radio" name={radioName} value={label} id={id} checked={checkedValue === label} onChange={onChange} />
              <label for={id}>{label}</label>
            </div>
          );
        })
      }
      {error && <p className="input-error-label">{error}</p>}
    </fieldset>
  );
};

export default RadioInput;
