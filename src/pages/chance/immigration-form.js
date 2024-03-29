import React, { useCallback, useState } from "react"
import Layout from "../../components/layout"
import DescriptionTitle from "../../components/DescriptionWrapper/DescriptionTitle"
import OddsFormWrapper from "../../components/reusable/forms/oddsForm/OddsFormWrapper"
import SingleLineInput from "../../components/reusable/forms/inputs/SingleLineInput/SingleLineImput"
import RadioInput from "../../components/reusable/forms/inputs/RadioInput/RadioInput"
import MultiLineInput from "../../components/reusable/forms/inputs/MultiLineInput/MultiLineInput"
import FeedbackCall from "../../components/reusable/forms/feedbackCall/FeedbackCall"
import { navigate } from '@reach/router';
import PhoneInput from "react-phone-input-2"
import {
  encode,
  errorRequiredLabel,
  isValid,
  validateEmail,
  validatePhone,
} from "../../utils/utils"
import PhoneInputWrapper from "../../components/reusable/forms/inputs/phoneInput/PhoneInput"

const fieldsToValidate = [
  "email",
  "phone",
  "fullName",
  "age",
  "maritalStatus",
  "placeOfLiving",
  "relatives",
  "englishLevel",
  "educationLevel",
  "workExperienceInCanada",
  "workExperienceOver10Years",
  "haveCanadaEducation",
]

const AGE = {
  title: "Сколько вам лет",
  radioName: "age",
  items: [
    {
      label: "До 18",
    },
    {
      label: "18-25",
    },
    {
      label: "26-25",
    },
    {
      label: "65+",
    },
  ],
}

const MARITAL_STATUS = {
  title: "Семейное положение",
  radioName: "maritalStatus",
  items: [
    {
      label: "Женат/замужем",
    },
    {
      label: "Холост/не замужем",
    },
    {
      label: "Вдова/вдовец",
    },
    {
      label: "Разведен/разведена",
    },
    {
      label: "Гражданский брак",
    },
  ],
}

const RELATIVES = {
  title: "У вас есть родственники в Канаде",
  radioName: "relatives",
  items: [
    {
      label: "Да, близкие",
    },
    {
      label: "Да, дальние",
    },
    {
      label: "Есть несколько знакомых",
    },
    {
      label: "Никого нет",
    },
  ],
}

const ENGLISH_LEVEL = {
  title: "Уровень знания иностранного языка (английского или французского)\n",
  radioName: "englishLevel",
  items: [
    {
      label: "Продвинутый",
    },
    {
      label: "Высокий",
    },
    {
      label: "Средний",
    },
    {
      label: "Начальный",
    },
  ],
}

const EDUCATION_LEVEL = {
  title: "Образование",
  radioName: "educationLevel",
  items: [
    {
      label: "Высшее",
    },
    {
      label: "Средне-специальное",
    },
    {
      label: "Базовое/Среднее\n",
    },
  ],
}

const HAVE_WORK_EXP_CANADA = {
  title: "Есть ли у Вас опыт работы в Канаде\n",
  radioName: "workExperienceInCanada",
  items: [
    {
      label: "Да",
    },
    {
      label: "Нет",
    },
  ],
}

const LAST_WORK_EXP = {
  title: "Есть ли у Вас опыт работы за последние 10 лет",
  radioName: "workExperienceOver10Years",
  items: [
    {
      label: "Да",
    },
    {
      label: "Нет",
    },
  ],
}

const HAVE_CANADA_EDUCATION = {
  title: "Обучались ли Вы в Канаде",
  radioName: "haveCanadaEducation",
  items: [
    {
      label: "Да",
    },
    {
      label: "Нет",
    },
  ],
}

const ImmigrationForm = () => {
  const [fields, setFields] = useState({
    phone: "+",
  })
  const [errors, setErrors] = useState({})

  const submitForm = useCallback(
    async event => {
      event.preventDefault()
      clearErrors()

      if (!validateForm()) {
        return
      }

      await fetch("https://mymci.ca/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Immigration Form", ...fields }),
      });
      await navigate('/');
    },
    [fields]
  )

  const updateFormField = useCallback(
    e => {
      setFields({
        ...fields,
        [e.target.name]: e.target.value,
      })
    },
    [fields, setFields]
  )

  const clearErrors = useCallback(() => {
    setErrors({})
  }, [setErrors])

  const setError = useCallback(
    (name, value) => {
      setErrors(prev => ({
        ...prev,
        [name]: value,
      }))
    },
    [setErrors]
  )

  const validateForm = useCallback(() => {
    let isFormValid = true
    fieldsToValidate.forEach(field => {
      switch (field) {
        case "email":
          if (!validateEmail(fields.email)) {
            setError("email", errorRequiredLabel)
            isFormValid = false
          }
          break
        case "phone":
          if (!validatePhone(fields.phone)) {
            setError("phone", errorRequiredLabel)
            isFormValid = false
          }
          break
        default:
          if (!isValid(fields[field])) {
            setError(field, errorRequiredLabel)
            isFormValid = false
          }
      }
    })
    return isFormValid
  }, [fields, setError, errors])

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
  } = fields

  return (
    <Layout>
      <DescriptionTitle title="Оценка шансов для иммиграции в Канаду" />
      <OddsFormWrapper
        title="Форма для оценки шансов для иммиграции в Канаду"
        name="Immigration Form"
        onSubmit={submitForm}
      >
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
            error={errors.email}
            placeholder="you@email.com"
            value={email}
            onChange={updateFormField}
          />
          <PhoneInputWrapper
            legend="Контактный телефон"
            value={phone}
            country={"ua"}
            error={errors.phone}
            onChange={phone =>
              setFields({
                ...fields,
                phone,
              })
            }
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
          <RadioInput
            {...AGE}
            error={errors.age}
            checkedValue={age}
            onChange={updateFormField}
          />
          <RadioInput
            {...MARITAL_STATUS}
            error={errors.maritalStatus}
            checkedValue={maritalStatus}
            onChange={updateFormField}
          />
        </div>
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
          <RadioInput
            {...RELATIVES}
            error={errors.relatives}
            checkedValue={relatives}
            onChange={updateFormField}
          />
          <RadioInput
            {...ENGLISH_LEVEL}
            error={errors.englishLevel}
            checkedValue={englishLevel}
            onChange={updateFormField}
          />
        </div>
        <div className="odds-form-line">
          <RadioInput
            {...EDUCATION_LEVEL}
            error={errors.educationLevel}
            checkedValue={educationLevel}
            onChange={updateFormField}
          />
          <RadioInput
            {...HAVE_WORK_EXP_CANADA}
            error={errors.workExperienceInCanada}
            checkedValue={workExperienceInCanada}
            onChange={updateFormField}
          />
        </div>
        <div className="odds-form-line">
          <RadioInput
            {...LAST_WORK_EXP}
            error={errors.workExperienceOver10Years}
            checkedValue={workExperienceOver10Years}
            onChange={updateFormField}
          />
          <RadioInput
            {...HAVE_CANADA_EDUCATION}
            error={errors.haveCanadaEducation}
            checkedValue={haveCanadaEducation}
            onChange={updateFormField}
          />
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
  )
}

export default ImmigrationForm
