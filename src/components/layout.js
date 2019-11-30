/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Header from './header/header';
import HeaderMobile from './header-mobile/HeaderMobile';
import Footer from './footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
