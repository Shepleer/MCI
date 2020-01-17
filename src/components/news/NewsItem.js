import React from 'react';
import './NewsItem.sass';
import AccentButton from '../reusable/AccentButton';

const NewsItem = ({ title, text, date, image, pathToItem, reverse }) => {
  return (
    <div className={`news-item ${reverse ? 'news-item-reverse' : ''}`}>
      <div className="news-preview">
        <p>{date}</p>
        <p>{title}</p>
        <p>{text}</p>
        <AccentButton to={pathToItem} title="Читать далее" transparent />
      </div>
      <img className="news-image" src={image} />
    </div>
  );
};

export default NewsItem;
