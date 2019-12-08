import React from 'react';


const SubmitButton = ({ title, className='accent-button', type='submit', id='', shadow=false, transparent=false }) => {
  if (className && className !== "accent-button") {
    className += " accent-button";
  }
  if (shadow) {
    className += " accent-button-shadow";
  }
  if (transparent) {
    className += " accent-button-transparent"
  }

  return (
    <button className={className} id={id} type={type} >
      <p className="accent-button-text" >{title}</p>
    </button>
  );
};

export default SubmitButton;
