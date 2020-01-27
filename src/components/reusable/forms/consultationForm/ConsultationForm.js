import React, { useCallback, useState } from "react";
import SingleLineInput from "../inputs/SingleLineInput/SingleLineImput";
import OptionalInput from "../inputs/optionalInputs/OptionalInput";
import "./consultationForm.sass";
import DatePickerInput from "../inputs/datePicker/DatePickerInput";
import { PayPalButton } from "react-paypal-button-v2";
import {
  encode,
  errorRequiredLabel,
  isValid,
  validateEmail
} from "../../../../utils/utils";

const fieldsToValidate = ['fullName', 'email', 'date', 'time'];

const ConsultationForm = ({ title }) => {
  const [fields, setFields] = useState({
    date: null,
    time: null,
  });
  const [selectedContactVariant, setContactVariant] = useState("whatsApp");
  const [errors, setErrors] = useState({});

  const clearErrors = useCallback(() => {
    setErrors({});
  }, [setErrors]);

  const setError = useCallback((name, value) => {
    setErrors(prev => ({
      ...prev,
      [name]: value,
    }));
  }, [setErrors]);

  const validateForm = useCallback((validationFields) => {
    let isFormValid = true;
    validationFields.forEach((field) => {
      switch (field) {
        case 'email':
          if (!validateEmail(fields.email)) {
            setError('email', errorRequiredLabel);
            isFormValid = false;
          }
          break;
        case 'date':
          if (!fields.date) {
            setError('date', 'Пожалуйста, введите дату в формате ДД/ММ/ГГГГ');
            isFormValid = false;
          }
          break;
        case 'time':
          if (!fields.time) {
            setError('time', 'Пожалуйста, введите время в формате ЧЧ:ММ');
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
  }, [fields, setError]);

  const updateFields = useCallback(
    (e) => {
      switch (e.target.type) {
        case "radio":
          setContactVariant(e.target.value);
          break;
        case "tel":
        case "text":
        default:
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

  const createOrder = useCallback((data, actions) => {
    clearErrors();
    if (!validateForm([...fieldsToValidate, selectedContactVariant])) {
      return;
    }

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
  }, [validateForm, selectedContactVariant]);

  const onApprove = useCallback(async (data, actions) => {

    const details = await actions.order.capture();

    await fetch("https://epic-shockley-4c3cca.netlify.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "consultation", ...fields, "orderID": data.orderID }),
    });
  }, [fields]);

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
      <form name="consultation" className="consultation-form" method="POST">
        <input type="hidden" name="form-name" value="Consultation" />
        <input type="hidden" name="fullName" />
        <input type="hidden" name="email" />
        <input type="hidden" name="date" />
        <input type="hidden" name="time" />
        <input type="hidden" name="whatsApp" />
        <input type="hidden" name="viber" />
        <input type="hidden" name="skype" />
        <input type="hidden" name="telegram" />
        <input type="hidden" name="orderID" />
        <div className="consultation-form-row">
          <SingleLineInput
            legend="Ваше имя"
            name="fullName"
            type="text"
            value={fullName}
            error={errors.fullName}
            onChange={updateFields}
            placeholder="Иванов Иван Иванович"
            fixed
          />
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            type="email"
            value={email}
            error={errors.email}
            onChange={updateFields}
            placeholder="you@email.com"
            fixed
          />
        </div>
        <div className="consultation-form-row">
          <DatePickerInput
            legend="Выберите дату"
            selectedDate={date}
            error={errors.date}
            onChange={date => setFields({
              ...fields,
              date
            })}
          />
          <DatePickerInput
            legend="Выберите время"
            selectedDate={time}
            error={errors.time}
            timePicker
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
              placeholder="Ваш номер WhatsApp"
              checkedValue={selectedContactVariant}
              value={whatsApp}
              error={errors.whatsApp}
              onChange={updateFields}
              label="WhatsApp"
            />
            <OptionalInput
              id="viber"
              radioValue="viber"
              name="viber"
              placeholder="Ваш номер Viber"
              checkedValue={selectedContactVariant}
              value={viber}
              error={errors.viber}
              onChange={updateFields}
              label="Viber"
            />
          </div>
          <div className="consultation-form-row">
            <OptionalInput
              id="skype"
              radioValue="skype"
              name="skype"
              placeholder="Ваш ник или номер Telegram"
              checkedValue={selectedContactVariant}
              value={skype}
              error={errors.skype}
              onChange={updateFields}
              label="Skype"
            />
            <OptionalInput
              id="telegram"
              radioValue="telegram"
              name="telegram"
              placeholder="Ваш ник или номер Skape"
              checkedValue={selectedContactVariant}
              value={telegram}
              error={errors.telegram}
              onChange={updateFields}
              label="Telegram"
            />
          </div>
        </div>
        <div className="consultation-cost-row">
          <p className="consultation-cost">Стоимость: 150 CAD</p>
        </div>
        <div className="paypal-button-container">
          <PayPalButton
            options={{
              clientId: process.env.PAYPAL_CLIENT_ID,
              disableFunding: "card",
              currency: "CAD",
            }}
            style={{
              shape: "pill",
              color: "silver"
            }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </div>
        <p className="privacy-policy-label">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
          соглашаетесь c политикой конфиденциальности</p>
      </form>
    </div>
  );
};

export default ConsultationForm;
