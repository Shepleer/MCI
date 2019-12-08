import React from 'react';
import { Link } from 'gatsby';
import './AccentButton.sass';

const AccentButton = ({ title, shadow=false, className='accent-button', id='', transparent=false}) => {
  if (className && className !== "accent-button") {
    className += " accent-button";
  }

  if (shadow) {
    className = className + " accent-button-shadow";
  }
  if (transparent) {
    className = className + " accent-button-transparent"
  }
  return (
    <Link className={className} to="#" id={id}>
      <p className="accent-button-text" >{ title || 'БЕСПЛАТНАЯ ОЦЕНКА ШАНСОВ'}</p>
    </Link>
  );
};

export default AccentButton;
