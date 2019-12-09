import React from 'react';
import './odds-form.sass';
import SubmitButton from '../inputs/submitButton/SubmitButton';

const OddsFormWrapper = ({ title, children }) => {
  return (
    <div className="odds-form-wrapper">
      <h4 className="odds-form-title">{title}</h4>
      <form className="odds-form">
        {children}
        <p className="privacy-policy-label">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
        <SubmitButton title="Отправить" transparent />
      </form>
    </div>
  );
};

export default OddsFormWrapper;
