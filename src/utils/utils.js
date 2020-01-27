export const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const validatePhone = (phone) => {
  const regExp = /^\+[\d\s()-]+$/g;
  const value = phone.trim();
  return regExp.test(value) && value.length > 15;
};

export const validateEmail = email => {
  const emailRegExp = /.+@.+\..+/i;
  return emailRegExp.test(email);
};

export const validateDate = date => {
  const dateRegExp = /^[0-3]\d\/[0-1]\d\/[0-9]{4}$/g
  return dateRegExp.test(date);
};

export const validateTime = time => {
  const timeRegExp = /^[0-2][0-9]:[0-6][0-9]$/g;
  return timeRegExp.test(time);
};

export const isValid = field => {
  return field && field.trim();
};


export const errorRequiredLabel = 'Пожалуйста, заполните все обязательные поля';

export const Months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

export const MonthsTitles = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "майя",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];
