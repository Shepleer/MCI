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
          questionsData: allMarkdownRemark(filter: {frontmatter: {path: {eq: "questions"}}}, limit: 3) {
              questions: edges {
                  node {
                      id
                      frontmatter{
                          title
                          description
                      }
                  }
              }
          }
          reviewsData: allMarkdownRemark(filter: {frontmatter: {path: {eq: "reviews"}}}) {
              reviews: edges {
                  node {
                      id
                      frontmatter {
                          avatar
                          name
                          description
                      }
                  }
              }
          }
      }
  `);
  const { questionsData: { questions } } = data;
  const questionItems = questions.map(element => element.node.frontmatter);
  const { reviewsData: { reviews } } = data;
  const reviewsItems = reviews.map(element => element.node.frontmatter);

  return (
    <Layout>
      <SEO title="Home" />
      <GreetingBanner />
      <BenefitsContainer />
      <ServicesCarousel />
      <TestBanner />
      <DescriptionText />
      <ConsultationBanner />
      <ReviewsCarousel reviews={reviewsItems} />
      <FeedbackCall />
      <FAQWrapper title="Есть вопросы?" text="Отлично! У нас есть ответы!" questions={questionItems} />
    </Layout>
  );
};

export default IndexPage;
