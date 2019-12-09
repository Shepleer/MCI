import React from 'react';
import Layout from '../../components/layout';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';
import FeedbackCall from '../../components/reusable/forms/feedbackCall/FeedbackCall';
import OddsFormWrapper from '../../components/reusable/forms/oddsForm/OddsFormWrapper';
import PhoneInput from '../../components/reusable/forms/inputs/phoneInput/PhoneInput';
import RadioInput from '../../components/reusable/forms/inputs/RadioInput/RadioInput';
import SingleLineInput from '../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput';
import MultiLineInput from '../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput';

const AGE = {
  title: 'Сколько вам лет',
  radioName: 'age',
  items: [
    {
      label: 'До 18',
    },
    {
      label: '18-25',
    },
    {
      label: '26-25',
    },
    {
      label: '65+',
    },
  ],
};

const MARITAL_STATUS = {
  title: 'Семейное положение',
  radioName: 'maritalStatus',
  items: [
    {
      label: 'Женат/замужем',
    },
    {
      label: 'Холост/не замужем',
    },
    {
      label: 'Вдова/вдовец',
    },
    {
      label: 'Разведен/разведена',
    },
    {
      label: 'Гражданский брак',
    },
  ],
};

const HAVE_CHILDREN = {
  title: 'Есть ли у вас дети',
  radioName: 'haveChildren',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const EMPLOYMENT = {
  title: 'Вы официально трудоустроены в стране проживания',
  radioName: 'employment',
  items: [
    {
      label: 'Да, могу предоставить справку',
    },
    {
      label: 'Не трудоустроен или работаю неофициально',
    },
  ],
};

const TRIPS = {
  title: 'Совершали ли Вы поездки в другие страны в течении последних 10 лет',
  radioName: 'trips',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const MONEY = {
  title: 'На вашем счету есть сумма из расчета $1000 на одну неделю пребывания в Канаде\n',
  radioName: 'money',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const RELATIVES = {
  title: 'У вас есть родственники в Канаде',
  radioName: 'relatives',
  items: [
    {
      label: 'Да, близкие',
    },
    {
      label: 'Да, дальние',
    },
    {
      label: 'Есть несколько знакомых',
    },
    {
      label: 'Никого нет',
    },
  ],
};

const VisaForm = () => {
  return (
    <Layout>
      <DescriptionTitle title="Оценка шансов на получение визы" />
      <OddsFormWrapper title="Данная форма позволит оценить Ваши шансы на получение визы">
        <div className="odds-form-line">
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
          <PhoneInput legend />
        </div>
        <SingleLineInput
          legend="Ваша фамилия имя и отчество"
          name="fullName"
          placeholder="Иванов Иван Иванович"
          required
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...AGE} />
          <RadioInput {...MARITAL_STATUS} />
        </div>
        <RadioInput {...HAVE_CHILDREN} />
        <SingleLineInput
          legend="Страна и город проживания"
          name="placeOfLiving"
          placeholder="Россия, г. Москва, ул. Ботаническая, 10 кв. 1"
          required
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...EMPLOYMENT}  />
          <RadioInput {...TRIPS} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...MONEY}  />
          <RadioInput {...RELATIVES} />
        </div>
        <MultiLineInput
          legend="Пожалуйста, укажите или предоставьте любую полезную, на Ваш взгляд, информацию (Ваши личностные преимущества), которая способствует увеличению оценки шансов на иммиграцию"
          name="comment"
          placeholder="Комментарий"
          fill
        />
      </OddsFormWrapper>
      <FeedbackCall />
    </Layout>
  );
};

export default VisaForm;
