import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DescriptionWrapper from '../components/DescriptionWrapper/DescriptionWrapper';
import Layout from '../components/layout';
import MainText from '../components/DescriptionWrapper/MainText';

const LMIA = () => {

  const { markdownRemark: {html} } = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: {templateKey: { eq:"lmia-page-content" }}) {
            html
        }
    }
  `);

  return (
    <Layout>
      <DescriptionWrapper title="Оценка Рынка Труда или LMIA">
        <MainText html={html} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default LMIA;
