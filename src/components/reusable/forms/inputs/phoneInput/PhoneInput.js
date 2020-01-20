import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputWrapper = ({ legend, name='phone', required=true, value, onChange }) => {
  return (
    <fieldset className="input-fieldset">
      {!!legend && <legend className="input-legend">{legend}</legend>}
      <PhoneInput
        value={value}
        onChange={onChange}
        country={"ru"}
        regions={"europe"}
        enableAreaCodes={true}
        inputProps={{
          name: name,
          required: required,
        }}
      />
    </fieldset>
  );
};

export default PhoneInputWrapper;
