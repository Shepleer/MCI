import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import { Navbar, Nav } from 'react-bootstrap';
import './relativeNav.sass';

const RelativeNav = ({ links }) => {



  return (
    <nav className="relative-nav on-content-layout separator">
      {links.map((current, index, array) => {
          if (index !== array.length - 1) {
            return (
              <>
                <Link className="relative-nav-link" to={current.link}>{current.title}</Link>
              </>
            );
          } else {
            return <Link className="relative-nav-link last" to={current.link}>{current.title}</Link>;
          }
        },
      )}
    </nav>
  );
};

export default RelativeNav;
