import React from 'react';
import './LinkBannersContainer.sass';
import LinkBanner from './LinkBanner';

const LinkBannersContainer = ({ items }) => {
  return (
    <div className="link-banners-container">
      {
        items.map(item => {
          const { title, text, linkTitle, to, background } = item;
          return <LinkBanner title={title} linkTitle={linkTitle} to={to} text={text} background={background} />
        })
      }
    </div>
  );
};

export default LinkBannersContainer;
