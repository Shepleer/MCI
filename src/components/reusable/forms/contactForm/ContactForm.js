import React, { useCallback, useState } from "react"
import "./contactForm.sass"
import "./../inputs/inputs.sass"
import SingleLineInput from "../inputs/SingleLineInput/SingleLineImput"
import SubmitButton from "../inputs/submitButton/SubmitButton"
import MultiLineInput from "../inputs/MultiLineInput/MultiLineInput"
import { encode } from "../../../../utils/utils"
import OddsFormWrapper from "../oddsForm/OddsFormWrapper"

const ContactForm = ({ popup, onPopupClose, formTitle }) => {

  const [fields, setFields] = useState({
    email: "",
    fullName: "",
    comment: "",
  })

  const updateFormField = useCallback(e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
    e.preventDefault()
  }, [setFields, fields])

  const handleSubmit = useCallback((e) => {
    fetch("https://epic-shockley-4c3cca.netlify.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact form", ...fields }),
    })
    e.preventDefault()
  }, [fields])

  const { fullName, email, comment } = fields;

  return (
    <form
      className={`contact-form ${popup && "contact-form-popup"}`}
      name="Contact form"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {popup &&
      <p className="">{formTitle}</p>
      }
      {popup &&
      <button onClick={onPopupClose} type="button" className="close-form-cross">
        <span/>
        <span/>
      </button>
      }
      <div className="contact-form-main">
        <div className="contact-info">
          <input type="hidden" name="form-name" value="Immigration Form" />
          <input type="hidden" name="email" />
          <input type="hidden" name="phone" />
          <input type="hidden" name="comment" />
          <SingleLineInput
            onChange={updateFormField}
            value={fullName}
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
            value={email}
            onChange={updateFormField}
            required
            fill
          />
        </div>
        <MultiLineInput
          legend="Сообщение"
          name="comment"
          value={comment}
          onChange={updateFormField}
          placeholder="Оставьте сообщение"
        />
      </div>
      <div className="submit-button-field">
        <SubmitButton id="contact-form-submit-button" title="ОТПРАВИТЬ" onSubmit={handleSubmit} transparent/>
      </div>
    </form>
  )
}

export default ContactForm
