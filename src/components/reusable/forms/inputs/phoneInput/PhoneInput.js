import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputWrapper = ({ legend, name='phone', error, required=true, value, onChange }) => {
  return (
    <fieldset className={`input-fieldset ${error ? 'phone-error-active' : ''}`}>
      {!!legend && <legend className="input-legend">{legend}</legend>}
      <PhoneInput
        value={value}
        onChange={onChange}
        country={"ua"}
        regions={"europe"}
        enableAreaCodes={true}
        inputProps={{
          name: name,
          required: required,
        }}
      />
      {error && <p className="input-error-label">{error}</p> }
    </fieldset>
  );
};

export default PhoneInputWrapper;
