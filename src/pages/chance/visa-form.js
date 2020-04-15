import React, { useCallback, useState } from "react";
import Layout from '../../components/layout';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';
import FeedbackCall from '../../components/reusable/forms/feedbackCall/FeedbackCall';
import OddsFormWrapper from '../../components/reusable/forms/oddsForm/OddsFormWrapper';
import RadioInput from '../../components/reusable/forms/inputs/RadioInput/RadioInput';
import SingleLineInput from '../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput';
import MultiLineInput from '../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput';
import PhoneInputWrapper from "../../components/reusable/forms/inputs/phoneInput/PhoneInput";
import { encode, errorRequiredLabel, isValid, validateEmail, validatePhone } from "../../utils/utils";


const fieldsToValidate = ['email', 'phone', 'fullName', 'age', 'maritalStatus', 'placeOfLiving', 'haveChildren', 'employment', 'trips', 'money', 'relatives'];

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
      label: '26-64',
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
  });
  const [errors, setErrors] = useState({});

  const submitForm = useCallback(event => {
    event.preventDefault();
    clearErrors();
    if (!validateForm()) {
      return;
    }

    fetch("https://mymci.ca/", {
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
  }, [fields, setFields]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, [setErrors]);

  const setError = useCallback((name, value) => {
    setErrors(prev => ({
      ...prev,
      [name]: value,
    }));
  }, [setErrors]);

  const validateForm = useCallback(() => {
    let isFormValid = true;
    fieldsToValidate.forEach((field) => {
      switch (field) {
        case 'email':
          if (!validateEmail(fields.email)) {
            setError('email', errorRequiredLabel);
            isFormValid = false;
          }
          break;
        case 'phone':
          if (!validatePhone(fields.phone)) {
            setError('phone', errorRequiredLabel);
            isFormValid = false;
          }
          break;
        default:
          if (!isValid(fields[field])) {
            setError(field, errorRequiredLabel);
            isFormValid = false;
          }
      }
    });
    return isFormValid;
  }, [fields, setError, errors]);

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
        <input type="hidden" name="form-name" value="Visa Form" />
        <input type="hidden" name="fullName" />
        <input type="hidden" name="email" />
        <input type="hidden" name="phone" />
        <input type="hidden" name="age" />
        <input type="hidden" name="maritalStatus" />
        <input type="hidden" name="placeOfLiving" />
        <input type="hidden" name="haveChildren" />
        <input type="hidden" name="employment" />
        <input type="hidden" name="trips" />
        <input type="hidden" name="money" />
        <input type="hidden" name="relatives" />
        <input type="hidden" name="comment" />
        <div className="odds-form-line">
          <SingleLineInput
            legend="Контактный E-mail"
            name="email"
            value={email}
            error={errors.email}
            onChange={updateFormField}
            placeholder="you@email.com"
          />
          <PhoneInputWrapper
            legend="Контактный телефон"
            value={phone}
            country={"ua"}
            error={errors.phone}
            onChange={phone => {
              setFields({
                ...fields,
                phone,
              })
            }}
          />
        </div>
        <SingleLineInput
          legend="Ваша фамилия имя и отчество"
          name="fullName"
          placeholder="Иванов Иван Иванович"
          value={fullName}
          error={errors.fullName}
          onChange={updateFormField}
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...AGE} error={errors.age} checkedValue={age} onChange={updateFormField} />
          <RadioInput {...MARITAL_STATUS} error={errors.maritalStatus} checkedValue={maritalStatus} onChange={updateFormField} />
        </div>
        <RadioInput {...HAVE_CHILDREN} error={errors.haveChildren} checkedValue={haveChildren} onChange={updateFormField} />
        <SingleLineInput
          legend="Страна и город проживания"
          name="placeOfLiving"
          placeholder="Россия, г. Москва, ул. Ботаническая, 10 кв. 1"
          value={placeOfLiving}
          error={errors.placeOfLiving}
          onChange={updateFormField}
          fill
        />
        <div className="odds-form-line">
          <RadioInput {...EMPLOYMENT} error={errors.employment} checkedValue={employment} onChange={updateFormField} />
          <RadioInput {...TRIPS} error={errors.trips} checkedValue={trips} onChange={updateFormField} />
        </div>
        <div className="odds-form-line">
          <RadioInput {...MONEY} error={errors.money} checkedValue={money} onChange={updateFormField} />
          <RadioInput {...RELATIVES} error={errors.relatives} checkedValue={relatives} onChange={updateFormField} />
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
