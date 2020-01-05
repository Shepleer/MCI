import React from 'react';

const SubmitButton = ({ onSubmit, title, className = 'accent-button', type = 'submit', id = '', shadow = false, transparent = false }) => {
  if (className && className !== 'accent-button') {
    className += ' accent-button';
  }
  if (shadow) {
    className += ' accent-button-shadow';
  }
  if (transparent) {
    className += ' accent-button-transparent';
  }

  return (
    <button className={className} type={type} id={id}>
      <p className="accent-button-text">{title}</p>
    </button>
  );
};

export default SubmitButton;
