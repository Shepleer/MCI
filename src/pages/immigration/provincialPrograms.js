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
    link: '/immigration',
    title: 'Иммиграция',
  },
  {
    link: '/restorationStatus',
    title: 'Продление и восстановление статуса',
  },
];

const RestorationStatus = () => {
  const { markdownRemark: { html } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"provincial-programs-page-content" }}) {
              html
          }
      }
  `);

  return (
    <Layout>
      <DescriptionWrapper title="Провинциальные Программы">
        <MainText html={html} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default RestorationStatus;
