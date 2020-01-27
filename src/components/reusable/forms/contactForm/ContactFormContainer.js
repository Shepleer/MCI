import React from "react";
import './contactForm.sass';
import ContactForm from './ContactForm';


const ContactFormContainer = () => {
  return (
    <div className="contact-form-container">
        <h4 className="form-title">Связаться с нами</h4>
        <ContactForm />
    </div>
  );
};

export default ContactFormContainer;
