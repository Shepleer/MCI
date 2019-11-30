import React from 'react';
import './consultaionBanner.sass';
import AccentButton from '../AccentButton';
import checkMark from './../../../images/consultation/check-mark.png';
import smartphone from './../../../images/consultation/smartphone.png';
import calendar from './../../../images/consultation/calendar.png';
import { Image } from 'react-bootstrap';
import curve from './../../../images/other/curve.svg';
import curveReversed from './../../../images/other/curve-reversed.svg';


const ConsultationStep = ({ id, stepNumber, title, image }) => {
  return (
    <div className="consultation-step" id={id}>
    <div className="consultation-step-container">
      <div className="consultation-step-number">{stepNumber}</div>
      <div className="consultation-step-image"><Image src={image} /></div>
    </div>
      <p className="consultation-step-title" >{title}</p>
    </div>
  );
};

const ConsultationBanner = () => {
  return (
    <div className="consultation-banner-container">
      <div>
        <h4 className="consultation-banner-title">Получите нашу консультацию</h4>
        <p className="consultation-banner-description">Предварительная консультация. Помощь в выборе иммиграционной
          программы или вакансии</p>
      </div>
      <div className="consultation-wrapper" >
        <ConsultationStep stepNumber="1" image={smartphone} title="Свяжитесь с нами" />
        <Image className="consultation-banner-curve" src={curveReversed} />
        <ConsultationStep id="consultation-step-center" stepNumber="2" image={calendar} title="Выберите дату" />
        <Image className="consultation-banner-curve" src={curve} />
        <ConsultationStep stepNumber="3" image={checkMark} title="Узнайте результат" />
      </div>
      <div>
        <AccentButton shadow />
      </div>
    </div>
  );
};

export default ConsultationBanner;
