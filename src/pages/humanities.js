import React from 'react';
import Layout from '../components/layout';
import DetailHeader from '../components/header/DetailHeader';
import CheckOddsBanner from '../components/reusable/checkOdds/CheckOddsBanner';
import DescriptionWrapper from '../components/DescriptionWrapper/DescriptionWrapper';
import DescriptionList from '../components/DescriptionWrapper/DescriptionList';
import LinkBanner from '../components/reusable/linkBanner/LinkBanner';

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
        <DescriptionList />
        <LinkBanner title="Гостевые визы" text="
Жителям многих стран нужна гостевая виза для посещения Канады. Для многих людей процесс оформления и подачи документов – это сложный и изнурительный процесс. Мы поможем Вам получить гостевую визу, правильно оформив все документы" />
      </DescriptionWrapper>
    </Layout>
  );
};

export default Humanities;
