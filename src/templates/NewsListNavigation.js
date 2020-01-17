import React from "react";
import { Link } from "gatsby";
import './NewsListNavigation.sass';

const NewsListNavigation = ({ pagesCount, currentPage }) => {

  if (pagesCount === 1) {
    return null;
  }

  const staticPages = [];
  for (let i = 0; i < pagesCount; i++) {
    staticPages.push(i + 1);
  }

  const isOnEdge = page => page < 4 || page > pagesCount - 3;
  const isFirstPage = page => page === 1;

  return (
    <div className="news-list-navigation-wrapper">
      <nav className="news-list-navigation">
        {!isFirstPage(currentPage) &&
        <Link className="news-list-arrow-link rotate" to={`/news/page${--currentPage}`}>
          <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4656 4.40116C27.6608 4.20589 27.6608 3.88931 27.4656 3.69405L24.2836 0.512069C24.0883 0.316807 23.7717 0.316807 23.5765 0.51207C23.3812 0.707332 23.3812 1.02391 23.5765 1.21918L26.4049 4.0476L23.5765 6.87603C23.3812 7.07129 23.3812 7.38788 23.5765 7.58314C23.7717 7.7784 24.0883 7.7784 24.2836 7.58314L27.4656 4.40116ZM0.89624 4.54761L27.112 4.5476L27.112 3.5476L0.89624 3.54761L0.89624 4.54761Z" fill="#2C384E"/>
          </svg>
        </Link>
        }
        {
          staticPages.map(item => {
            if (isOnEdge(item)) {
              const link = !isFirstPage(item) && `/page${item}`;
              return (
                <Link className={`news-list-link ${item === currentPage ? 'current-link' : ''}`} to={`/news${link}`}>
                  <p>{item}</p>
                </Link>
              );
            } else if (item === currentPage || item === currentPage + 1 || item === currentPage + 2) {
              return (
                <Link className={`news-list-link ${(item === currentPage + 1) ? 'current-link' : ''}`} to={`/news${item}`}>
                  <p>{item}</p>
                </Link>
              );
            }
          })
        }
        {currentPage !== pagesCount &&
        <Link className="news-list-arrow-link" to={`/news/page${++currentPage}`}>
          <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4656 4.40116C27.6608 4.20589 27.6608 3.88931 27.4656 3.69405L24.2836 0.512069C24.0883 0.316807 23.7717 0.316807 23.5765 0.51207C23.3812 0.707332 23.3812 1.02391 23.5765 1.21918L26.4049 4.0476L23.5765 6.87603C23.3812 7.07129 23.3812 7.38788 23.5765 7.58314C23.7717 7.7784 24.0883 7.7784 24.2836 7.58314L27.4656 4.40116ZM0.89624 4.54761L27.112 4.5476L27.112 3.5476L0.89624 3.54761L0.89624 4.54761Z" fill="#2C384E"/>
          </svg>
        </Link>
        }
      </nav>
    </div>
  );
};

export default NewsListNavigation;
