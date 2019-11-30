import React from 'react';
import { Image } from 'react-bootstrap';
import './descriptionText.sass';

import peopleBig from './../../images/description/people-big.png';
import peopleMedium from './../../images/description/people-medium.png';
import peopleSmall from './../../images/description/people-small.png';
import descriptionTextBackground from './../../images/description/description-text-background.png';

const text = `Успешная иммиграция наших клиентов - это лучшая оценка нашей работы.

  Мы постарались воплотить в этом проекте все самые новые и смелые тенденции в вопросах иммиграции.
  Мы креативны и избегаем шаблонных решений! Условия сотрудничества с нами прозрачные и понятные.
  Мы не используем размытых и непонятных формулировок и не навязываем свои платные услуги.

  Мы всегда честны с вами, не рисуем сказочных перспектив если реально их нет, и не обещаем того, чего не можем выполнить.

  Мы разрабатываем для вас предложения, которые эффективно и максимально быстро приведут к получению желаемого результата - статус PR Канады.`;

const DescriptionText = ({ children, }) => {

  // let image;
  // const { innerWidth } = window;
  // if (innerWidth > 640) {
  //   image = peopleBig;
  // } else if (innerWidth < 640) {
  //   image = peopleMedium;
  // } else if (innerWidth < 460) {
  //   image = peopleSmall;
  // }

  return (
    <div className="descriptionContainer">
      <Image className="description-text-image" src={peopleMedium} />
      <div className="text-container">
        <h2>Иммиграция в Канаду</h2>
        <p>Успешная иммиграция наших клиентов - это лучшая оценка нашей работы. <br/><br/>

          Мы постарались воплотить в этом проекте все самые новые и смелые тенденции в вопросах иммиграции.
          Мы креативны и избегаем шаблонных решений! Условия сотрудничества с нами прозрачные и понятные.
          Мы не используем размытых и непонятных формулировок и не навязываем свои платные услуги.<br/><br/>

          Мы всегда честны с вами, не рисуем сказочных перспектив если реально их нет, и не обещаем того, чего не можем выполнить.<br/><br/>

          Мы разрабатываем для вас предложения, которые эффективно и максимально быстро приведут к получению желаемого результата - статус PR Канады.</p>
      </div>
    </div>
  );
};


export default DescriptionText;
