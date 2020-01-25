import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.sass";
import ru from "date-fns/locale/ru";
import { Months } from "../../../../../utils/utils";

registerLocale("ru", ru);

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
        <p>{Months[prevMonth]}</p>
      </button>
      <button className="current-date" type="button" disabled>
        <p>{`${Months[currentMonth]}, ${date.getFullYear()}`}</p>
      </button>
      <button className="change-month-button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} type="button">
        <p>{Months[nextMonth]}</p>
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
