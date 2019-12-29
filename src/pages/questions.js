import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DetailHeader from '../components/header/DetailHeader';
import FAQWrapper from '../components/reusable/questions/FAQWrapper';
import ConsultationBanner from '../components/reusable/consultationBanner/ConsultationBanner';
import { graphql, useStaticQuery } from 'gatsby';

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/questions',
    title: 'Вопросы',
  },
];

const Questions = () => {

  const data = useStaticQuery(graphql`
    query QuestionsPageQuery {
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "questions"}}}) {
            edges {
                node {
                    id
                    frontmatter {
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
      <SEO title="ask" />
      <DetailHeader links={links} />
      <FAQWrapper title="Вопрос-ответ" questions={questions} />
      <ConsultationBanner />
    </Layout>
  );
};

export default Questions;
