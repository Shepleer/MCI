import React from 'react';
import FAQ from './FAQ';
import './FAQ.sass';
import AccentButton from '../AccentButton';

const FAQWrapper = ({ title, text = null, questions }) => {
  return (
    <div className="faq-container">
      <h4>{title}</h4>
      {text && <p>{text}</p>}
      <FAQ questions={questions} />
      <AccentButton title="ВСЕ ВОПРОСЫ" transparent />
    </div>
  );
};

export default FAQWrapper;
