import React from 'react';
import Layout from '../components/layout';
import DetailHeader from '../components/header/DetailHeader';
import DescriptionTitle from '../components/DescriptionWrapper/DescriptionTitle';

const links = [
  {
    link: '/',
    title: 'Главная'
  },
  {
    link: '/contact',
    title: 'Контакты'
  },
];

const Contact = () => {
  return (
    <Layout>
      <DetailHeader links={links} />
      <DescriptionTitle title="Контакты" />

    </Layout>
  );
};

export default Contact;
