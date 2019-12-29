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
import FeedbackCall from '../components/reusable/forms/feedbackCall/FeedbackCall';
import FAQWrapper from '../components/reusable/questions/FAQWrapper';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query IndexQuery {
          allMarkdownRemark(filter: {frontmatter: {path: {eq: "questions"}}}, limit: 3) {
              edges{
                  node{
                      id
                      frontmatter{
                          title
                          description
                      }
                  }
              }
          }
      }
  `);

  const { allMarkdownRemark: { edges } } = data;
  const questions = edges.map(element => element.node.frontmatter);

  return (
    <Layout>
      <SEO title="Home" />
      <GreetingBanner />
      <BenefitsContainer />
      <ServicesCarousel />
      <TestBanner />
      <DescriptionText />
      <ConsultationBanner />
      <ReviewsCarousel />
      <FeedbackCall />
      <FAQWrapper title="Есть вопросы?" text="Отлично! У нас есть ответы!" questions={questions} />
    </Layout>
  );
};

export default IndexPage;
