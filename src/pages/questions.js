import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RelativeNav from "../components/header/RelativeNav";
import FAQWrapper from "../components/reusable/questions/FAQWrapper";
import ConsultationBanner from "../components/reusable/consultationBanner/ConsultationBanner";
import { graphql, useStaticQuery } from "gatsby";
import FeedbackCall from "../components/reusable/forms/feedbackCall/FeedbackCall";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";

const links = [
  {
    link: "/",
    title: "Главная"
  },
  {
    link: "/questions",
    title: "Вопросы"
  }
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
      <RelativeNav links={links} />
      <DescriptionTitle title="Вопрос-Ответ" />
      <FAQWrapper questions={questions} />
      <FeedbackCall />
      <ConsultationBanner />
    </Layout>
  );
};

export default Questions;
