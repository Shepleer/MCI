import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.sass";
import ru from "date-fns/locale/ru";

registerLocale("ru", ru);

const months = [
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

const DateInput = (props) => {
  return <input type="text" {...props} />;
};

const renderHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) => {
  const currentMonth = date.getMonth();
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  return (
    <div className="date-picker-header">
      <button className="change-month-button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} type="button">
        <p>{months[prevMonth]}</p>
      </button>
      <button className="current-date" type="button" disabled>
        <p>{`${months[currentMonth]}, ${date.getFullYear()}`}</p>
      </button>
      <button className="change-month-button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} type="button">
        <p>{months[nextMonth]}</p>
      </button>
    </div>
  );
};

const DatePickerInput = ({ selectedDate, onChange, legend, timePicker = false, fieldsetId=undefined }) => {

  const today = new Date();
  const maxDate = new Date().setFullYear(today.getFullYear() + 1);

  const placeholder = timePicker ? "00:00" : "ДД/ММ/ГГГГ";

  return (
    <fieldset id={fieldsetId} className="input-fieldset">
      { legend && <legend className="input-legend">{legend}</legend>}
      <DatePicker
        showPopperArrow={false}
        selected={selectedDate}
        onChange={onChange}
        minDate={today}
        maxDate={maxDate}
        dateFormat="dd/MM/yyyy"
        locale="ru"
        className={`date-input ${timePicker ? 'time-picker-image' : 'date-picker-image' }`}
        calendarClassName="calendar"
        dayClassName={() => "calendar-day"}
        showTimeSelect={timePicker}
        showTimeSelectOnly={timePicker}
        customInput={<DateInput />}
        renderCustomHeader={renderHeader}
        placeholderText={placeholder}
      />
    </fieldset>
  );
};

export default DatePickerInput;
