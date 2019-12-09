import React from 'react';
import './contactForm.sass';
import './../inputs/inputs.sass';
import EmailInput from '../inputs/SingleLineInput/SingleLineImput';
import FullNameInput from '../inputs/fullNameInput/FullNameInput';
import CommentsInput from '../inputs/MultiLineInput/MultiLineInput';
import SubmitButton from '../inputs/submitButton/SubmitButton';

const ContactForm = () => {
  return (
    <form className="contact-form" name="contact" method="POST" data-netlify="true">
      <div className="contact-form-main">
        <div className="contact-info">
          <FullNameInput id="contact-form-name-input" />
          <EmailInput id="contact-form-email-input" />
        </div>
        <CommentsInput id="contact-form-message-textarea" fieldsetId="contact-form-message-fieldset" />
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
