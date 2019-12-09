import React, { useCallback, useState } from 'react';
import './phoneInput.sass';
import { Dropdown } from 'react-bootstrap';
import DropdownArrow from './../../../../../images/other/dropdown-arrow.png';

const PhonePrefixToggle = React.forwardRef(({ selectedValue, onClick }, ref) => (
  <button
    className="phone-input-dropdown"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <p>{selectedValue}</p>
    <img className="dropdown-arrow" src={DropdownArrow} alt="dropdown button" />
  </button>
));

const PhonePrefixItem = ({ value, eventKey }) => {
  return (
    <p>{value}</p>
  );
};

const PhoneInput = ({ legend }) => {

  const values = ['+6', '+5', '+6', '+5', '+6', '+5'];

  const [selectedPhonePrefix, setSelectedPhonePrefix] = useState(values[0]);
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSelect = useCallback((eventKey, event) => {
    setSelectedPhonePrefix(values[eventKey]);
  }, [values, setSelectedPhonePrefix]);

  return (
    <div className="phone-input-container">
      {
        legend &&
        <p className="phone-input-legend">Контактный телефон</p>
      }
      <div className="phone-input-wrapper">
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle as={PhonePrefixToggle} selectedValue={selectedPhonePrefix} />
          <Dropdown.Menu className="phone-input-dropdown-menu">
            <Dropdown.Item eventKey="0">
              +0
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              +5
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              +2
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              +7
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input type="tel" className="phone-input" />
      </div>
    </div>
  );
};

export default PhoneInput;
