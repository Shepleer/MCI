import React from 'react';

const RadioInput = ({ title, radioName, items }) => {
  return (
    <fieldset className="input-fieldset radio-fieldset">
      <legend className="input-legend">{title}</legend>
      {
        items.map((item, index) => {
          const { label } = item;
          const id = `${radioName}${index}`;
          return (
            <div className="radio-item">
              <input type="radio" name={radioName} value={label} id={id} />
              <label for={id}>{label}</label>
            </div>
          );
        })
      }
    </fieldset>
  );
};

export default RadioInput;