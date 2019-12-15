import React from 'react';
import Layout from '../components/layout';
import DescriptionWrapper from '../components/DescriptionWrapper/DescriptionWrapper';
import MainText from '../components/DescriptionWrapper/MainText';
import { graphql, useStaticQuery } from 'gatsby';

const Sitizenship = () => {
  const { markdownRemark: { html } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"citizenship-page-content" }}) {
              html
          }
      }
  `);

  return (
    <Layout>
      <DescriptionWrapper title="Гражданство">
        <MainText html={html} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default Sitizenship;
