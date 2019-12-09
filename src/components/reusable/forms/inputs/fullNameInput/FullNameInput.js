import React from 'react';

const FullNameInput = ({ id='', className='one-line-input', fieldsetId='', fill }) => {
  if (fill) {
    className += ' fill-input';
  }

  return (
    <fieldset id={fieldsetId} className="input-fieldset">
      <legend className="input-legend">Ваша фамилия имя и отчество</legend>
      <input id={id} className={className} name="full-name" type="text" placeholder="Иванов Иван Иванович" required />
    </fieldset>
  );
};

export default FullNameInput;
