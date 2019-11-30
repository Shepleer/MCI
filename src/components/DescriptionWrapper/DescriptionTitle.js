import React from 'react';
import './DescriptionTitle.sass';

const DescriptionTitle = ({ title }) => {
  return (
    <div className="description-title-container" >
      <h2>{title}</h2>
    </div>
  );
};

export default DescriptionTitle;
