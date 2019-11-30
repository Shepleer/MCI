import React from 'react';
import './feedbackCall.sass';
import PhoneInput from '../imputs/phoneForm/PhoneInput';
import AccentButton from '../../AccentButton';

const FeedbackCall = () => {
  return (
    <div className="feedback-call-container">
      <h4>Для более подробной информации об услуге оставьте свои данные</h4>
      <p>Наш специалист свяжется с вами в течение 30 минут</p>
      <form className="feedback-call-form">
        <PhoneInput />
        <AccentButton title="оставить заявку" />
      </form>
      <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
        конфиденциальности.</p>
    </div>
  );
};

export default FeedbackCall;
