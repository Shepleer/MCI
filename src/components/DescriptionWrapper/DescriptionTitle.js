import React from 'react';
import './DescriptionTitle.sass';

const DescriptionTitle = ({ title, detail }) => {
  return (
    <div className="description-title-container" >
      <h2>{title}</h2>
      <h6>{detail}</h6>
    </div>
  );
};

export default DescriptionTitle;
