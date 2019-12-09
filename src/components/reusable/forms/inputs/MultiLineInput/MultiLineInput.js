import React from 'react';

const MultiLineInput = ({ legend, name, placeholder, id = '', className = 'multiline-input', fieldsetId = '', fill, required }) => {
  if (fill) {
    className += ' fill-input';
  }

  return (
    <fieldset id={fieldsetId} className="input-fieldset">
      {!!legend && <legend className="input-legend">{legend}</legend>}
      <textarea id={id} className={className} name={name} placeholder={placeholder} required={required} />
    </fieldset>
  );
};

export default MultiLineInput;
