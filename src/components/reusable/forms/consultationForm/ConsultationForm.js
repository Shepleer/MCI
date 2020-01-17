import React from "react";
import SubmitButton from "../inputs/submitButton/SubmitButton";
import SingleLineInput from "../inputs/SingleLineInput/SingleLineImput";
import RadioInput from "../inputs/RadioInput/RadioInput";
import './consultationForm.sass';

const OptionalInput = ({ active=false, }) => {
  return (
    <div>
      <RadioInput/>
      <SingleLineInput/>
    </div>
  );
};

const ConsultationForm = ({ title }) => {
  return (
    <div className="consultation-form-wrapper">
      <h4 id="consultation-form-title" className="consultation-form-label">{title}</h4>
      <form className="consultation-form" method="POST">
        <div className="consultation-form-row">
          <SingleLineInput />
          <SingleLineInput />
        </div>
        <div className="consultation-form-row">
          <p className="consultation-form-label">Как с вами связаться?</p>
        </div>
        <div className="consultation-cost-row">
          <p className="consultation-cost">Стоимость: 150 CAD</p>
        </div>
        <SubmitButton title="Отправить" transparent />
        <p className="privacy-policy-label">Нажимая на кнопку, вы даете согласие на обработку персональных данных и
          соглашаетесь c политикой конфиденциальности</p>
      </form>
    </div>
  );
};


export default ConsultationForm;
