import React from "react";
import './contactForm.sass';
import ContactForm from './ContactForm';


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
