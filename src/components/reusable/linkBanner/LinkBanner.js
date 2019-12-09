import React from 'react';
import './linkBanner.sass';
import AccentButton from '../AccentButton';

const LinkBanner = ({ title, text, linkTitle, to, background, className = 'link-banner' }) => {

  if (background) {
    className += ' link-banner-background';
  }
  return (
    <div className={className}>
      <h5>{title}</h5>
      <p className="link-banner-text">{text}</p>
      <AccentButton title={linkTitle} to={to} transparent />
    </div>
  );
};

export default LinkBanner;
