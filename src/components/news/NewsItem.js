import React from 'react';
import './NewsItem.sass';
import AccentButton from '../reusable/AccentButton';
import { MonthsTitles } from "../../utils/utils";

const NewsItem = ({ title, text, date, image, pathToItem, reverse }) => {

  const regExp = /\d+/g;
  const [year, month, day] = date.match(regExp);
  const fulldate = `${day} ${MonthsTitles[month.toString() - 1]} ${year}`;

  return (
    <div className={`news-item ${reverse ? 'news-item-reverse' : ''}`}>
      <div className="news-preview">
        <p className="post-publish-date">{fulldate}</p>
        <p className="post-title">{title}</p>
        <p className="post-detail-label">{text}</p>
        <AccentButton to={pathToItem} title="Читать далее" transparent />
      </div>
      <img className="news-image" src={image} />
    </div>
  );
};

export default NewsItem;
