import React, { useCallback, useState } from "react"
import "./contactForm.sass"
import "./../inputs/inputs.sass"
import SingleLineInput from "../inputs/SingleLineInput/SingleLineImput"
import SubmitButton from "../inputs/submitButton/SubmitButton"
import MultiLineInput from "../inputs/MultiLineInput/MultiLineInput"
import { encode, errorRequiredLabel, isValid, validateEmail, validatePhone } from "../../../../utils/utils";
import OddsFormWrapper from "../oddsForm/OddsFormWrapper"
import AccentButton from "../../AccentButton"

const fieldsToValidate = ['fullName', 'email', 'comment'];

const ContactForm = ({ popup, onPopupClose, formTitle }) => {
  const [fields, setFields] = useState({
    email: '',
    fullName: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const updateFormField = useCallback(
    e => {
      setFields({
        ...fields,
        [e.target.name]: e.target.value,
      });
    },
    [setFields, fields]
  );

  const clearErrors = useCallback(() => {
    setErrors({});
  }, [setErrors]);

  const setError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  }, [setErrors]);

  const validateForm = useCallback(() => {
    let isFormValid = true;
    fieldsToValidate.forEach((field) => {
      switch (field) {
        case 'email':
          if (!validateEmail(fields.email)) {
            setError('email', errorRequiredLabel);
            isFormValid = false;
          }
          break;
        default:
          if (!isValid(fields[field])) {
            setError(field, errorRequiredLabel);
            isFormValid = false;
          }
      }
    });
    return isFormValid;
  }, [fields, setError, errors]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    clearErrors();
    if (!validateForm()) {
      return;
    }

    fetch("https://epic-shockley-4c3cca.netlify.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact form", ...fields }),
    })
  }, [fields]);

  return (
    <form
      className={`contact-form ${popup ? "contact-form-popup" : ""}`}
      name="Contact form"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/*{popup &&*/}
      {/*<p className="">{formTitle}</p>*/}
      {/*}*/}
      {/*{popup &&*/}
      {/*<button onClick={onPopupClose} type="button" className="close-form-cross">*/}
      {/*  <span/>*/}
      {/*  <span/>*/}
      {/*</button>*/}
      {/*}*/}
      {/*<div className="contact-form-main">*/}
      {/*  <div className="contact-info">*/}
      {/*    <input type="hidden" name="form-name" value="Immigration Form" />*/}
      {/*    <input type="hidden" name="fullName" />*/}
      {/*    <input type="hidden" name="email" />*/}
      {/*    <input type="hidden" name="comment" />*/}
      {/*    <SingleLineInput*/}
      {/*      onChange={updateFormField}*/}
      {/*      value={fullName}*/}
      {/*      legend="Ваша фамилия имя и отчество"*/}
      {/*      name="fullName"*/}
      {/*      placeholder="Иванов Иван Иванович"*/}
      {/*      required*/}
      {/*      fill*/}
      {/*    />*/}
      {/*    <SingleLineInput*/}
      {/*      legend="Контактный E-mail"*/}
      {/*      name="email"*/}
      {/*      placeholder="you@email.com"*/}
      {/*      value={email}*/}
      {/*      onChange={updateFormField}*/}
      {/*      required*/}
      {/*      fill*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <MultiLineInput*/}
      {/*    legend="Сообщение"*/}
      {/*    name="comment"*/}
      {/*    value={comment}*/}
      {/*    onChange={updateFormField}*/}
      {/*    placeholder="Оставьте сообщение"*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="submit-button-field">*/}
      {/*  <SubmitButton id="contact-form-submit-button" title="ОТПРАВИТЬ" onSubmit={handleSubmit} transparent/>*/}
      {/*</div>*/}
      <input type="hidden" name="form-name" value="Contact form" />
      <input type="hidden" name="fullName" />
      <input type="hidden" name="email" />
      <input type="hidden" name="comment" />
      {popup &&
      <button onClick={onPopupClose} type="button" className="close-form-cross">
          <span/>
          <span/>
        </button>
      }
      <div className="form-inputs-container">
        <div>
          <SingleLineInput
            id="contact-full-name-input"
            fieldsetId="contact-full-name-fieldset"
            name="fullName"
            value={fields.fullName}
            onChange={updateFormField}
            error={errors.fullName}
            type="text"
            placeholder="Иванов Иван Иванович"
            legend="Ваша фамилия имя и отчество"
          />
          <SingleLineInput
            id="contact-email-input"
            fieldsetId="contact-email-fieldset"
            name="email"
            value={fields.email}
            onChange={updateFormField}
            error={errors.email}
            type="text"
            placeholder="you@email.com"
            legend="Контактный E-mail"
          />
        </div>
        <MultiLineInput
          id="contact-comment-input"
          fieldsetId="contact-comment-fieldset"
          name="comment"
          value={fields.comment}
          onChange={updateFormField}
          error={errors.comment}
          placeholder="Оставьте сообщение"
          legend="Сообщение"
        />
      </div>
      <SubmitButton id="contact-form-button" title="Отправить" transparent />
    </form>
  )
};

export default ContactForm
