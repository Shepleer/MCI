import React from 'react';
import './checkOdds.sass';
import AccentButton from '../AccentButton';

const CheckOddsBanner =  () => {
  return (
    <div className="odds-container">
      <h4>Узнай свои шансы на Иммиграцию!</h4>
      <p>Заполните анкету и мы свяжемся с вами в ближайшее время</p>
      <AccentButton shadow title="Бесплатная оценка шансов" to="/chance" />
    </div>
  );
};

export default CheckOddsBanner;
