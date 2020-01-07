import React from 'react';
import FAQ from './FAQ';
import './FAQ.sass';
import AccentButton from '../AccentButton';

const FAQWrapper = ({ title=null, text=null, questions, withLinkTo=null, linkTitle="" }) => {
  return (
    <div className="faq-container">
      {title && <h4>{title}</h4>}
      {text && <p className="questions-detail-title">{text}</p>}
      <FAQ questions={questions} />
      {withLinkTo && <AccentButton id="questions-accent-button" title={linkTitle} transparent to={withLinkTo} />}
    </div>
  );
};

export default FAQWrapper;
