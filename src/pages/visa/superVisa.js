import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import MainText from '../../components/DescriptionWrapper/MainText';
import DescriptionWrapper from '../../components/DescriptionWrapper/DescriptionWrapper';

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/visa',
    title: 'Визы',
  },
  {
    link: '/restorationStatus',
    title: 'Продление и восстановление статуса',
  },
];

const SuperVisa = () => {
  const { markdownRemark: { html } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"super-visa-page-content" }}) {
              html
          }
      }
  `);

  return (
    <Layout>
      <DescriptionWrapper title="Супер Визы">
        <MainText html={html} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default SuperVisa;
