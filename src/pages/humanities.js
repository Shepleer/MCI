import React from 'react';
import Layout from '../components/layout';
import DetailHeader from '../components/header/DetailHeader';
import DescriptionWrapper from '../components/DescriptionWrapper/DescriptionWrapper';

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
  return (
    <Layout>
      <DetailHeader links={links} />
      <DescriptionWrapper title="Гуманитарная программа">

      </DescriptionWrapper>
    </Layout>
  );
};

export default Humanities;
