import React from 'react';
import FAQ from './FAQ';
import './FAQ.sass';

const FAQWrapper = ({ title, text = null }) => {
  return (
    <div className="faq-container">
      <h4>{title}</h4>
      {text && <p>{text}</p>}
      <FAQ />
    </div>
  );
};

export default FAQWrapper;
