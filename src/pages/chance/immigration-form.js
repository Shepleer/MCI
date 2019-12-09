import React from 'react';
import Layout from '../../components/layout';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';
import OddsFormWrapper from '../../components/reusable/forms/oddsForm/OddsFormWrapper';
import SingleLineInput from '../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput';
import PhoneInput from '../../components/reusable/forms/inputs/phoneInput/PhoneInput';
import RadioInput from '../../components/reusable/forms/inputs/RadioInput/RadioInput';
import MultiLineInput from '../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput';
import FeedbackCall from '../../components/reusable/forms/feedbackCall/FeedbackCall';

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

const ENGLISH_LEVEL = {
  title: 'Уровень знания иностранного языка (английского или французского)\n',
  radioName: 'english level',
  items: [
    {
      label: 'Продвинутый',
    },
    {
      label: 'Высокий',
    },
    {
      label: 'Средний',
    },
    {
      label: 'Начальный',
    },
  ],
};

const EDUCATION_LEVEL = {
  title: 'Образование',
  radioName: 'education level',
  items: [
    {
      label: 'Высшее',
    },
    {
      label: 'Средне-специальное',
    },
    {
      label: 'Базовое/Среднее\n',
    },
  ],
};

const HAVE_WORK_EXP_CANADA = {
  title: 'Есть ли у Вас опыт работы в Канаде\n',
  radioName: 'work experience in Canada',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const LAST_WORK_EXP = {
  title: 'Есть ли у Вас опыт работы за последние 10 лет',
  radioName: 'work experience over 10 years',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const HAVE_CANADA_EDUCATION = {
  title: 'Обучались ли Вы в Канаде',
  radioName: 'have Canada education',
  items: [
    {
      label: 'Да',
    },
    {
      label: 'Нет',
    },
  ],
};

const ImmigrationForm = () => {
  return (
    <Layout>
      <DescriptionTitle title="Оценка шансов на получение визы" />
      <OddsFormWrapper title="Данная форма позволит оценить Ваши шансы на получение визы" name="Immigration Form">
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
        <SingleLineInput
          legend="Страна и город проживания"
          name="placeOfLiving"
          placeholder="Россия, г. Москва, ул. Ботаническая, 10 кв. 1"
          required
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...RELATIVES} />
          <RadioInput {...ENGLISH_LEVEL} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...EDUCATION_LEVEL} />
          <RadioInput {...HAVE_WORK_EXP_CANADA} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...LAST_WORK_EXP} />
          <RadioInput {...HAVE_CANADA_EDUCATION} />
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

export default ImmigrationForm;
