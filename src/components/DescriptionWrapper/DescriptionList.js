import React from 'react';
import './descriptionList.sass';

const DescriptionListItem = () => {
  return (
    <li className="description-list-item">
      <div className="description-list-item-indicator" />
      <p className="">Hello world! Hello world! Hello world! Hello world! Hello world! Hello world!</p>
    </li>
  );
};

const DescriptionList = () => {
  return (
    <div className="description-list">
      <ul>
        <DescriptionListItem />
        <DescriptionListItem />
        <DescriptionListItem />
      </ul>
    </div>
  );
};

export default DescriptionList;
