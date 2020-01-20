import React, { useState } from "react";
import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.sass";
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

const DateInput = (props) => {
  return <input type="text" {...props} />
};

const DatePickerInput = ({ selectedDate, onChange, maxDate }) => {
  return (
    <DatePicker
      showPopperArrow={false}
      selected={selectedDate}
      onChange={onChange}
      minDate={selectedDate}
      maxDate={maxDate}
      dateFormat="dd/MM/yyyy"
      locale="ru"
      className="date-input"
      customInput={<DateInput/>}
      placeholder="Выберите дату дд/мм/гггг"
    />
  );
};

export default DatePickerInput;