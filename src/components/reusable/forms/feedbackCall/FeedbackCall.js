import React, { useCallback, useState } from "react"
import "./feedbackCall.sass"
import "./phoneInput.sass"
import SubmitButton from "../inputs/submitButton/SubmitButton"
import PhoneInput from "react-phone-input-2"
import { validatePhone, encode } from "../../../../utils/utils"
import { navigate } from '@reach/router';

const FeedbackCall = () => {
  const [phone, setPhone] = useState("+");
  const [error, setError] = useState(null);

  const validateForm = useCallback(() => {
    const isValid = validatePhone(phone);
    if (!isValid) {
      setError("Пожалуйста, заполните это поле\n");
      return false
    }
    return true
  }, [phone, setError]);

  const clearError = useCallback(() => {
    setError(null);
  }, [setError]);

  const handleSubmit = useCallback(
    async e => {
      clearError();
      if (validateForm()) {
        await fetch("https://mymci.ca/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "Contact phone", phone: phone }),
        });
        await navigate('/');
      }
      e.preventDefault();
    },
    [phone]
  );

  return (
    <div className="feedback-call-container">
      <h4>Для более подробной информации об услуге оставьте свои данные</h4>
      <p className="description-label">
        Наш специалист свяжется с вами в течение 30 минут
      </p>
      <form
        name="Contact phone"
        onSubmit={handleSubmit}
        className="feedback-call-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Contact phone" />
        <input type="hidden" name="phone" />
        <div className={`phone-input ${error ? "phone-error-active" : ""}`}>
          <PhoneInput
            value={phone}
            onChange={setPhone}
            country={"ua"}
            regions={"europe"}
            enableAreaCodes={true}
          />
          {error && <p className="error-label">{error}</p>}
        </div>
        <SubmitButton title="ОСТАВИТЬ ЗАЯВКУ" type="submit" shadow />
      </form>
      <p className="policy-label">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
        соглашаетесь c политикой конфиденциальности.
      </p>
    </div>
  )
};

export default FeedbackCall
