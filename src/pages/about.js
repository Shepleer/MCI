import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DetailHeader from '../components/header/DetailHeader';
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
    <DetailHeader links={links} />
    <AboutContent />
    <FeedbackCall/>
    <ConsultationBanner/>
  </Layout>
);

export default About;
