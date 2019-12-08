import React from 'react';

const EmailInput = () => {
  return (
    <fieldset className="input-fieldset">
      <legend className="input-legend">Контактный E-mail</legend>
      <input className="one-line-input" name="email" type="email" placeholder="you@email.com" required />
    </fieldset>
  );
};

export default EmailInput;
