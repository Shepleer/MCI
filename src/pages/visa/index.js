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
    to: '/visa/guestVisa',
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa',
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa',
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa',
  },
  {
    title: 'Гостевые Визы',
    linkTitle: 'Подробнее',
    to: '/visa/guestVisa',
  },
];

const Visa = () => {
  const { markdownRemark: { html, frontmatter: { guestVisaDescription, studentVisaDescription, workVisaDescription, superVisaDescription, restorationStatusDescription } } } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter: {templateKey: { eq:"visa-page-content" }}){
              frontmatter {
                  guestVisaDescription
                  studentVisaDescription
                  workVisaDescription
                  superVisaDescription
                  restorationStatusDescription
              }
              html
          }
      }
  `);

  const visas = [
    {
      title: 'Гостевые Визы',
      text: guestVisaDescription,
      linkTitle: 'Подробнее',
      to: '/visa/guestVisa',
    },
    {
      title: 'Студенческие Визы',
      text: studentVisaDescription,
      linkTitle: 'Подробнее',
      to: '/visa/studentVisa',
    },
    {
      title: 'Рабочие Визы',
      text: workVisaDescription,
      linkTitle: 'Подробнее',
      to: '/visa/workVisa',
    },
    {
      title: 'Супер Визы',
      text: superVisaDescription,
      linkTitle: 'Подробнее',
      to: '/visa/superVisa',
    },
    {
      title: 'Продление и Восстановление Статуса',
      text: restorationStatusDescription,
      linkTitle: 'Подробнее',
      to: '/visa/restorationStatus',
    },
  ];

  return (
    <Layout>
      <DescriptionWrapper title="Визы">
        <MainText html={html} />
        <LinkBannersContainer items={visas} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default Visa;
