import React from 'react';
import './NewsItem.sass';
import AccentButton from '../reusable/AccentButton';

const NewsItem = ({ title, text, date, image }) => {
  return (
    <div className="news-item">
      <div className="news-preview">
        <p>{date}</p>
        <p>{title}</p>
        <p>{text}</p>
        <AccentButton title="Читать далее" transparent />
      </div>
      <img className="news-image" src={image} />
    </div>
  );
};

export default NewsItem;
