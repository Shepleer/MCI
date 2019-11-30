import React from 'react';
import './linkBanner.sass';
import AccentButton from '../AccentButton';

const LinkBanner = ({ title, text }) => {
  return (
    <div className="link-banner">
      <h5>{title}</h5>
      <p className="link-banner-text">{text}</p>
      <AccentButton transparent />
    </div>
  );
};

export default LinkBanner;
