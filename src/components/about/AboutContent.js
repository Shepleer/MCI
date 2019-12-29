import React from 'react';
import './AboutContent.sass';
import { Image } from 'react-bootstrap';
import president from '../../../static/assets/president.jpg';

const AboutContent = () => {
  return (
    <div className="about-content-container" >
      <h2 className="about-content-title">О нас</h2>
      <p>Иммиграционный процесс - сложная задача, связанная с рисками и неопределенностью.
        Во избежание лишних хлопот и волнений, компания Maple Country Immigration Inc. готова провести вас через этот путь. Наша компания занимается решением любых вопросов, касающихся иммиграции и путешествий в Канаду.
      </p>
      <div className="about-content-row">
        <Image src={president} />
        <p>Учредитель и президент Maple Country Immigration Inc. - Анна Крупеня, лицензированный канадский иммиграционный консультант, аккредитованный Канадским советом по регулированию иммиграционных консультантов (ICCRC), номер лицензии - R520493.
        </p>
      </div>
      <p>Все специалисты нашей компании высокопрофессиональны и знают о тонкостях работы по любым направлениям иммиграции. В самые короткие сроки и без проволочек мы поможем оформить полный пакет документов, необходимых для решения ваших вопросов.<br/><br/>

        Наше кредо - индивидуальный подход, надежность, и оперативность. Наше преимущество - широкий опыт работы в области иммиграции, короткие сроки подготовки документов, а также большое количество успешно иммигрировавших в Канаду клиентов.<br/><br/>

        Вы все еще затрудняетесь с выбором? Перезвоните нам! Мы подберем оптимальный для вас вариант и подготовим все необходимые документы для иммиграции или путешествия в Канаду.<br/><br/>
      </p>
    </div>
  );
};

export default AboutContent;
