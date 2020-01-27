import React from 'react';

const MultiLineInput = ({ legend, name, error, onChange, value, placeholder, id = null, className = 'multiline-input', fieldsetId = '', fill, required }) => {
  if (fill) {
    className += ' fill-input';
  }

  return (
    <fieldset id={fieldsetId} className="multiline-input-fieldset">
      {!!legend && <legend className="input-legend">{legend}</legend>}
      <textarea id={id} className={`${className} ${fill ? 'fill-input' : ''} ${error ? 'input-error-active' : ''}`} name={name} onChange={onChange} value={value} placeholder={placeholder} required={required} />
      {error && <p className="input-error-label">{error}</p>}
    </fieldset>
  );
};

export default MultiLineInput;
