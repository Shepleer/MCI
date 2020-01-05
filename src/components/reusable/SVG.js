import React from 'react';

const SVG = ({ icon, color }) => {
  console.log(icon);
  return (
    <svg viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  );
};


export default SVG;
