import React from 'react';

const SVG = ({ icon, color }) => {
  return (
    <svg viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  );
};


export default SVG;
