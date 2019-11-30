import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import './detailHeader.sass';

const DetailHeader = ({ links }) => {
  return (
    <Navbar className="detail-header separator" >
      <Nav className="ml-xl-6 mr-xl-6">
      {links.map((current, index, array) => {
          if (index !== array.length - 1) {
            return (
              <>
                <Link className="nav-link detail-header-separator p-0" to={current.link}>{current.title}</Link>
              </>
            );
          } else {
            return <Link className="nav-link detail-header-separator-last p-0" to={current.link}>{current.title}</Link>;
          }
        },
      )}
      </Nav>
    </Navbar>
  );
};

export default DetailHeader;
