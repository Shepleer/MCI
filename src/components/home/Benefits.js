import React from 'react';
import { Link } from "gatsby";
import { Image } from 'react-bootstrap';
import luggage from '../../images/benefits/luggage.png';
import visa from '../../images/benefits/visa.png';
import family from '../../images/benefits/family.png';
import hearth from '../../images/hearth.svg';
import blank from '../../images/blancks.svg';
import document from '../../images/document.svg';
import './benefits.sass';

const Benefit = ({ image, to, title, text }) => {
  return (
    <Link to={to} className="benefit">
      <div className="image-container">
        <Image src={image} />
      </div>
      <h6 className="benefit-title" >{title}</h6>
      <p className="benefit-description" >{text}</p>
    </Link>
  );
};

const BenefitsContainer = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-row">
        <Benefit to="/immigration" image={luggage} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Иммиграция" />
        <Benefit to="visa" image={visa} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Визы" />
        <Benefit to="immigration/familySponsorship" image={family} text="Иммиграция для родителей, бабушек/дедушек, супруга, детей, усыновление" title="Семейное Спонсорство" />
      </div>
      <div className="benefits-row">
        <Benefit to="/humanities" image={hearth} text="Иммиграция на основании гуманитарных мотивов" title="Гуманитарная программа" />
        <Benefit to="/lmia" image={blank} text="Подача заявления на проведение Оценки Влияния на Рынок Труда (LMIA)" title="Оценка влияния на рынок труда (LMIA)" />
        <Benefit to="/visa/restorationStatus" image={document} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Продление статуса" />
      </div>
    </div>
  );
};

export default BenefitsContainer;
