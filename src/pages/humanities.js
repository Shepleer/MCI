import React from 'react';
import Layout from '../components/layout';
import RelativeNav from '../components/header/RelativeNav';
import CheckOddsBanner from '../components/reusable/checkOdds/CheckOddsBanner';
import DescriptionWrapper from '../components/DescriptionWrapper/DescriptionWrapper';
import DescriptionList from '../components/DescriptionWrapper/DescriptionList';
import LinkBanner from '../components/reusable/linkBanner/LinkBanner';
import MainText from '../components/DescriptionWrapper/MainText';
import { graphql, useStaticQuery } from 'gatsby';

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/programs',
    title: 'Программы',
  },
  {
    link: '/humanities',
    title: 'Гуманитарная программа',
  },
];

const Humanities = () => {

  const { markdownRemark: { html } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"humanities-page-content" }}) {
              html
          }
      }
  `);

  return (
    <Layout>
      <RelativeNav links={links} />
      <DescriptionWrapper title="Гуманитарная программа">
        <MainText html={html} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default Humanities;
