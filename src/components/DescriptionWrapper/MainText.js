import React from 'react';
import './MainText.sass';

const MainText = ({ html }) => {
  return (
    <div className="main-text-container" dangerouslySetInnerHTML={{__html: html}} />
  );
};

export default MainText;
