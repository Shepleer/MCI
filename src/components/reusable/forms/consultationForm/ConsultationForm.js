import React, { useCallback, useState } from "react";
import SingleLineInput from "../inputs/SingleLineInput/SingleLineImput";
import OptionalInput from "../inputs/optionalInputs/OptionalInput";
import "./consultationForm.sass";
import DatePickerInput from "../inputs/datePicker/DatePickerInput";
import { PayPalButton } from "react-paypal-button-v2";

const ConsultationForm = ({ title }) => {
  const [fields, setFields] = useState({
    date: new Date()
  });
  const [selectedContactVariant, setContactVariant] = useState("viber");

  const updateFields = useCallback(
    (e) => {
      switch (e.target.type) {
        case "radio":
          setContactVariant(e.target.value);
          break;
        case "tel":
        case "text":
        default:
          console.log(e.target.value);
          setFields({
            ...fields,
            [e.target.name]: e.target.value
          });
          break;
      }
    },
    [setContactVariant, setFields, fields]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(fields);
      console.log(selectedContactVariant);
    },
    [fields, selectedContactVariant]);

  const {
    fullName,
    email,
    date,
    time,
    whatsApp,
    viber,
    skype,
    telegram
  } = fields;

  return (
    <div className="consultation-form-wrapper">
      <h4 id="consultation-form-title" className="consultation-form-label">{title}</h4>
      <form className="consultation-form" method="POST" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="Consultation" />
        <input type="hidden" name="fullName" />
        <input type="hidden" name="email" />
        <input type="hidden" name="date" />
        <input type="hidden" name="time" />
        <input type="hidden" name="whatsApp" />
        <input type="hidden" name="viber" />
        <input type="hidden" name="skype" />
        <input type="hidden" name="telegram" />
        <div className="consultation-form-row">
          <SingleLineInput
            legend="Ваше имя"
            name="fullName"
            type="text"
            value={fullName}
            onChange={updateFields}
            placeholder="Иванов Иван Иванович"
            fixed
            required
          />
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            type="email"
            value={email}
            onChange={updateFields}
            placeholder="you@email.com"
            fixed
            required
          />
        </div>
        <div className="consultation-form-row">
          <DatePickerInput
            selectedDate={date}
            onChange={date => setFields({
              ...fields,
              date
            })}
          />
          <DatePickerInput
            selectedDate={time}
            TimePicker
            onChange={time => setFields({
              ...fields,
              time
            })}
          />
        </div>
        <div className="consultation-form-row">
          <p className="consultation-form-label">Как с вами связаться?</p>
        </div>
        <div>
          <div className="consultation-form-row">
            <OptionalInput
              id="whatsApp"
              radioValue="whatsApp"
              name="whatsApp"
              checkedValue={selectedContactVariant}
              value={whatsApp}
              onChange={updateFields}
              label="WhatsApp"
            />
            <OptionalInput
              id="viber"
              radioValue="viber"
              name="viber"
              checkedValue={selectedContactVariant}
              value={viber}
              onChange={updateFields}
              label="Viber"
            />
          </div>
          <div className="consultation-form-row">
            <OptionalInput
              id="skype"
              radioValue="skype"
              name="skype"
              checkedValue={selectedContactVariant}
              value={skype}
              onChange={updateFields}
              label="Skype"
            />
            <OptionalInput
              id="telegram"
              radioValue="telegram"
              name="telegram"
              checkedValue={selectedContactVariant}
              value={telegram}
              onChange={updateFields}
              label="Telegram"
            />
          </div>
        </div>
        <div className="consultation-cost-row">
          <p className="consultation-cost">Стоимость: 150 CAD</p>
        </div>
        {/*<SubmitButton title="Отправить" transparent />*/}
        <div className="paypal-button-container">
          <PayPalButton
            options={{
              clientId: "AUCXq6X1BjOBG6nG_vSIb_ZvydpmEJaNiTVhWCgAbZQ-lf7-EOrVHSdJuNHXYOHUaT1ro0w5C3rXBG9h",
              disableFunding: "card"
            }}
            style={{
              shape: "pill",
              color: "silver"
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "CAD",
                    value: "150"
                  }
                }],
                application_context: {
                  shipping_preference: "NO_SHIPPING"
                }
              });
            }}
            onApprove={(data, actions) => {
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                alert("Transaction: " + details);
              });
            }}
          />
        </div>
        <p className="privacy-policy-label">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
          соглашаетесь c политикой конфиденциальности</p>
      </form>
    </div>
  );
};

export default ConsultationForm;
