import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.sass';
import BenefitsContainer from './../components/home/Benefits';
import GreetingBanner from '../components/home/GreetingBanner';
import ServicesCarousel from '../components/home/ServicesCarousel';
import TestBanner from '../components/home/TestBanner';
import DescriptionText from '../components/home/DescriptionText';
import ConsultationBanner from '../components/reusable/consultationBanner/ConsultationBanner';
import ReviewsCarousel from '../components/reviews/reviewsCarousel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GreetingBanner />
    <BenefitsContainer />
    <ServicesCarousel />
    <TestBanner />
    <DescriptionText />
    <ConsultationBanner />
    <ReviewsCarousel />
  </Layout>
);

export default IndexPage;
