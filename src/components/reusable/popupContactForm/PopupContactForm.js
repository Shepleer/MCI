import React from "react";
import './popupContactForm.sass';
import ContactForm from "../forms/contactForm/ContactForm";

const PopupContactForm = ({ visible, onClose }) => {
  return (
    <div className={`popup-contact-form ${!visible ? "popup-hidden" : ''}`}>
      <div id="light-layer" className="popup-layer" />
      <div id="dark-layer" className="popup-layer" />
      <div id="main-layer" className="popup-layer" >
        <ContactForm popup onPopupClose={onClose}/>
      </div>
    </div>
  );
};

export default PopupContactForm;
