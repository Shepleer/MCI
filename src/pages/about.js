import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DetailHeader from '../components/header/DetailHeader';
import AboutContent from '../components/about/AboutContent';

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/about',
    title: 'О нас',
  },
];

const About = () => (
  <Layout>
    <SEO title="About" />
    <DetailHeader links={links} />
    <AboutContent />
  </Layout>
);

export default About;
