import React, { useCallback, useState } from 'react';
import './feedbackCall.sass';
import SubmitButton from '../inputs/submitButton/SubmitButton';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { encode } from '../../../../utils/utils';

const FeedbackCall = () => {

  const [phone, setPhone] = useState('+');

  const handleSubmit = useCallback((e) => {
    const encoded = `${encodeURIComponent('phone')}=${encodeURIComponent(phone)}`
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "phone contact form", encoded })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  });


  return (
    <div className="feedback-call-container">
      <h4>Для более подробной информации об услуге оставьте свои данные</h4>
      <p className="description-label">Наш специалист свяжется с вами в течение 30 минут</p>
      {/*<form onSubmit={(e) => {console.log(phone); e.preventDefault();}} className="feedback-call-form">*/}
      <form onSubmit={handleSubmit} className="feedback-call-form">
        <PhoneInput value={phone} onChange={setPhone} country={"ru"} regions={'europe'}  />
        <SubmitButton title="ОСТАВИТЬ ЗАЯВКУ" type="submit" shadow />
      </form>
      <p className="policy-label" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
        конфиденциальности.</p>
    </div>
  );
};

export default FeedbackCall;
