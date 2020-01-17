import React, { useCallback, useState } from 'react';
import './odds-form.sass';
import SubmitButton from '../inputs/submitButton/SubmitButton';

const OddsFormWrapper = ({ title, name, children, onSubmit }) => {

  return (
    <div className="odds-form-wrapper">
      <h4 className="odds-form-title">{title}</h4>
      <form className="odds-form" name={name} method="POST" onSubmit={onSubmit} >
        {children}
        <p className="privacy-policy-label">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
          соглашаетесь c политикой конфиденциальности</p>
        <SubmitButton title="Отправить" transparent />
      </form>
    </div>
  );
};

export default OddsFormWrapper;
