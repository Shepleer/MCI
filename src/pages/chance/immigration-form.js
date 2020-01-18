import React, { useCallback, useState } from "react"
import Layout from '../../components/layout';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';
import OddsFormWrapper from '../../components/reusable/forms/oddsForm/OddsFormWrapper';
import SingleLineInput from '../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput';
import RadioInput from '../../components/reusable/forms/inputs/RadioInput/RadioInput';
import MultiLineInput from '../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput';
import FeedbackCall from '../../components/reusable/forms/feedbackCall/FeedbackCall';
import PhoneInput from "react-phone-input-2";
import { encode } from "../../utils/utils"

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
  radioName: 'englishLevel',
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
  radioName: 'educationLevel',
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
  radioName: 'workExperienceInCanada',
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
  radioName: 'workExperienceOver10Years',
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
  radioName: 'haveCanadaEducation',
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
  const [fields, setFields] = useState({
    phone: '+',
  });

  const submitForm = useCallback(event => {
    event.preventDefault();
    fetch("https://epic-shockley-4c3cca.netlify.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Immigration Form", ...fields }),
    });
  }, [fields]);

  const updateFormField = useCallback(e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }, [fields, setFields]);

  const {
    email,
    phone,
    fullName,
    age,
    maritalStatus,
    placeOfLiving,
    relatives,
    englishLevel,
    educationLevel,
    workExperienceInCanada,
    workExperienceOver10Years,
    haveCanadaEducation,
    comment,
  } = fields;

  return (
    <Layout>
      <DescriptionTitle title="Оценка шансов на получение визы" />
      <OddsFormWrapper title="Данная форма позволит оценить Ваши шансы на получение визы" name="Immigration Form" onSubmit={submitForm}>
        <input type="hidden" name="form-name" value="Immigration Form" />
        <input type="hidden" name="fullName" />
        <input type="hidden" name="email" />
        <input type="hidden" name="phone" />
        <input type="hidden" name="age" />
        <input type="hidden" name="maritalStatus" />
        <input type="hidden" name="placeOfLiving" />
        <input type="hidden" name="relatives" />
        <input type="hidden" name="englishLevel" />
        <input type="hidden" name="educationLevel" />
        <input type="hidden" name="workExperienceInCanada" />
        <input type="hidden" name="workExperienceOver10Years" />
        <input type="hidden" name="haveCanadaEducation" />
        <input type="hidden" name="comment" />
        <div className="odds-form-line">
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={updateFormField}
            required
          />
          <fieldset className="input-fieldset">
            <legend className="input-legend">Телефон</legend>
            <PhoneInput
              value={phone}
              onChange={phone => setFields({
                ...fields,
                phone,
              })}
              country={"ru"}
              regions={"europe"}
              enableAreaCodes={true}
            />
          </fieldset>
        </div>
        <SingleLineInput
          legend="Ваша фамилия имя и отчество"
          name="fullName"
          placeholder="Иванов Иван Иванович"
          value={fullName}
          onChange={updateFormField}
          required
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...AGE} checkedValue={age} onChange={updateFormField} />
          <RadioInput {...MARITAL_STATUS} checkedValue={maritalStatus} onChange={updateFormField} />
        </div>
        <SingleLineInput
          legend="Страна и город проживания"
          name="placeOfLiving"
          placeholder="Россия, г. Москва, ул. Ботаническая, 10 кв. 1"
          value={placeOfLiving}
          onChange={updateFormField}
          required
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...RELATIVES} checkedValue={relatives} onChange={updateFormField} />
          <RadioInput {...ENGLISH_LEVEL} checkedValue={englishLevel} onChange={updateFormField} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...EDUCATION_LEVEL} checkedValue={educationLevel} onChange={updateFormField} />
          <RadioInput {...HAVE_WORK_EXP_CANADA} checkedValue={workExperienceInCanada} onChange={updateFormField} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...LAST_WORK_EXP} checkedValue={workExperienceOver10Years} onChange={updateFormField} />
          <RadioInput {...HAVE_CANADA_EDUCATION} checkedValue={haveCanadaEducation} onChange={updateFormField} />
        </div>
        <MultiLineInput
          legend="Пожалуйста, укажите или предоставьте любую полезную, на Ваш взгляд, информацию (Ваши личностные преимущества), которая способствует увеличению оценки шансов на иммиграцию"
          name="comment"
          placeholder="Комментарий"
          value={comment}
          onChange={updateFormField}
          fill
        />
      </OddsFormWrapper>
      <FeedbackCall />
    </Layout>
  );
};

export default ImmigrationForm;
