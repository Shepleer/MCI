import React, { useCallback, useState } from 'react';
import './contactForm.sass';
import './../inputs/inputs.sass';
import SingleLineInput from '../inputs/SingleLineInput/SingleLineImput';
import MultiLineInput from '../inputs/MultiLineInput/MultiLineInput';
import SubmitButton from '../inputs/submitButton/SubmitButton';

const ContactForm = () => {

  const [fields, setFields] = useState({});

  const updateFormField = useCallback(e => {
    const name = e.target.name
    console.log(name)
    console.log(e.target);
    setFields(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
    e.preventDefault();
  }, [setFields]);

  return (
    <form className="contact-form" name="contact" method="POST" data-netlify="true">
      <div className="contact-form-main">
        <div className="contact-info">
          <SingleLineInput
            onChange={updateFormField}
            value={fields.fullName}
            legend="Ваша фамилия имя и отчество"
            name="fullName"
            placeholder="Иванов Иван Иванович"
            required
            fill
          />
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            placeholder="you@email.com"
            required
            fill
          />
        </div>
        <MultiLineInput
          legend="Сообщение"
          name="comment"
          placeholder="Оставьте сообщение"
        />
      </div>
      <div className="submit-button-field">
        <SubmitButton id="contact-form-submit-button" title="ОТПРАВИТЬ" transparent />
      </div>
    </form>
  );
};

const ContactFormContainer = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h4 className="form-title">Связаться с нами</h4>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormContainer;
