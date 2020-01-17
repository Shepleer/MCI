import React, { useCallback, useState } from "react";
import Layout from '../../components/layout';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';
import FeedbackCall from '../../components/reusable/forms/feedbackCall/FeedbackCall';
import OddsFormWrapper from '../../components/reusable/forms/oddsForm/OddsFormWrapper';
import RadioInput from '../../components/reusable/forms/inputs/RadioInput/RadioInput';
import SingleLineInput from '../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput';
import MultiLineInput from '../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput';
import PhoneInput from "react-phone-input-2";
import { encode } from "../../utils/utils";

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

  const [fields, setFields] = useState({
    phone: '+',
    age: '',
  });

  const submitForm = useCallback(event => {
    event.preventDefault();
    fetch("https://epic-shockley-4c3cca.netlify.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Visa Form", ...fields }),
    });
  }, [fields]);

  const updateFormField = useCallback(e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    console.log(fields);
  }, [fields, setFields]);

  const {
    email,
    phone,
    fullName,
    age,
    maritalStatus,
    placeOfLiving,
    haveChildren,
    employment,
    trips,
    money,
    relatives,
    comment,
  } = fields;

  return (
    <Layout>
      <DescriptionTitle title="Оценка шансов на получение визы" />
      <OddsFormWrapper title="Данная форма позволит оценить Ваши шансы на получение визы" name="Visa Form" onSubmit={submitForm}>
        <div className="odds-form-line">
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            type="email"
            value={email}
            onChange={updateFormField}
            placeholder="you@email.com"
            required
          />
          <PhoneInput
            value={phone}
            onChange={phone => {
              setFields({
                ...fields,
                phone,
              })
            }}
            country={"ru"}
            regions={"europe"}
            enableAreaCodes={true}
          />
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
        <RadioInput {...HAVE_CHILDREN} checkedValue={haveChildren} onChange={updateFormField} />
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
          <RadioInput {...EMPLOYMENT} checkedValue={employment} onChange={updateFormField} />
          <RadioInput {...TRIPS} checkedValue={trips} onChange={updateFormField} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...MONEY} checkedValue={money} onChange={updateFormField} />
          <RadioInput {...RELATIVES} checkedValue={relatives} onChange={updateFormField} />
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

export default VisaForm;
