import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import MainText from '../../components/DescriptionWrapper/MainText';
import DescriptionWrapper from '../../components/DescriptionWrapper/DescriptionWrapper';
import LinkBannersContainer from '../../components/reusable/linkBanner/LinkBannersContainer';


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
    link: '/visa',
    title: 'Визы',
  },
];

const visas = [
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa'
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa'
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa'
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa'
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa'
  },
];

const Visa = () => {
  const { markdownRemark: { html } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"visa-page-content" }}) {
              html
          }
      }
  `);

  const visas = [
    {
      title: 'Гостевые Визы',
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa'
    },
    {
      title: 'Гостевые Визы',
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa'
    },
    {
      title: 'Гостевые Визы',
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa'
    },
    {
      title: 'Гостевые Визы',
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa'
    },
    {
      title: 'Гостевые Визы',
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa'
    },
  ];

  return (
    <Layout>
      <DescriptionWrapper title="Визы">
        <MainText html={html} />
        <LinkBannersContainer />
      </DescriptionWrapper>
    </Layout>
  );
};

export default Visa;
