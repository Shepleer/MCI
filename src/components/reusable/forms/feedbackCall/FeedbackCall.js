import React, { useCallback, useState } from 'react';
import './feedbackCall.sass';
import SubmitButton from '../inputs/submitButton/SubmitButton';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { encode } from '../../../../utils/utils';

const FeedbackCall = () => {

  const [phone, setPhone] = useState('+');

  const handleSubmit = useCallback((e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Phone contact", "phone": phone })
    });
    e.preventDefault();
  });


  return (
    <div className="feedback-call-container">
      <h4>Для более подробной информации об услуге оставьте свои данные</h4>
      <p className="description-label">Наш специалист свяжется с вами в течение 30 минут</p>
      <form name="Contact phone"
            onSubmit={handleSubmit}
            className="feedback-call-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="Contact phone" />
        <PhoneInput value={phone} onChange={setPhone} country={"ru"} regions={'europe'} name="phone" />
        <SubmitButton title="ОСТАВИТЬ ЗАЯВКУ" type="submit" shadow />
      </form>
      <p className="policy-label" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
        конфиденциальности.</p>
    </div>
  );
};

export default FeedbackCall;
