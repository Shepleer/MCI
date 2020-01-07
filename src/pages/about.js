import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RelativeNav from '../components/header/RelativeNav';
import AboutContent from '../components/about/AboutContent';
import FeedbackCall from "../components/reusable/forms/feedbackCall/FeedbackCall";
import ConsultationBanner from "../components/reusable/consultationBanner/ConsultationBanner";

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
    <RelativeNav links={links} />
    <AboutContent />
    <FeedbackCall/>
    <ConsultationBanner/>
  </Layout>
);

export default About;
