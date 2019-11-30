import React from 'react';
import { Image } from 'react-bootstrap';
import luggage from '../../images/benefits/luggage.png';
import visa from '../../images/benefits/visa.png';
import family from '../../images/benefits/family.png';
import './benefits.sass';

const Benefit = ({ image, title, text }) => {
  return (
    <div className="benefit">
      <div className="image-container">
        <Image src={image} />
      </div>
      <h6 className="benefit-title" >{title}</h6>
      <p className="benefit-description" >{text}</p>
    </div>
  );
};

const BenefitsContainer = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-row">
        <Benefit image={luggage} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Иммиграция" />
        <Benefit image={visa} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Визы" />
        <Benefit image={family} text="Иммиграция для родителей, бабушек/дедушек, супруга, детей, усыновление" title="Семейное Спонсорство" />
      </div>
      <div className="benefits-row">
        <Benefit image={luggage} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Иммиграция" />
        <Benefit image={visa} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Визы" />
        <Benefit image={family} text="Иммиграция для родителей, бабушек/дедушек, супруга, детей, усыновление" title="Семейное Спонсорство" />
      </div>
    </div>
  );
};

export default BenefitsContainer;
