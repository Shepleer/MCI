import React from 'react';

const FullNameInput = () => {
  return (
    <fieldset className="input-fieldset">
      <legend className="input-legend">Ваша фамилия имя и отчество</legend>
      <input className="one-line-input" name="full-name" type="text" placeholder="Иванов Иван Иванович" required />
    </fieldset>
  );
};

export default FullNameInput;
