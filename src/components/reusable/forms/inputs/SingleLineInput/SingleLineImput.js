import React from 'react';

const SingleLineInput = ({ legend, name, value='', onChange, type='text', placeholder, id=undefined, className='one-line-input', fieldsetId=undefined, fill, fixed, required }) => {
  if (fill) {
    className += ' fill-input';
  }

  return (
    <fieldset id={fieldsetId} className="input-fieldset">
      { !!legend && <legend className="input-legend">{legend}</legend> }
      <input id={id} className={className} name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} required={required} />
    </fieldset>
  );
};

export default SingleLineInput;
