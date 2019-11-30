import React from 'react';
import './phoneInput.sass';
import { Dropdown } from 'react-bootstrap';
import DropdownArrow from './../../../../../images/other/dropdown-arrow.png';

const PhonePrefixToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const PhoneInput = () => {
  return (
    <div className="phone-input-wrapper">
      <Dropdown>
        <Dropdown.Toggle className="phone-input-dropdown" >
          <p>+7</p>
          <img className="dropdown-arrow" src={DropdownArrow} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="phone-input-dropdown-menu">
          <Dropdown.Item>
            Action
          </Dropdown.Item>
          <Dropdown.Item>
            Action
          </Dropdown.Item>
          <Dropdown.Item>
            Action
          </Dropdown.Item>
          <Dropdown.Item>
            Action
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <input type="tel" className="phone-input" />
    </div>
  );
};

export default PhoneInput;
