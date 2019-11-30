import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DetailHeader from '../components/header/DetailHeader';
import FAQWrapper from '../components/reusable/questions/FAQWrapper';
import ConsultationBanner from '../components/reusable/consultationBanner/ConsultationBanner';

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/questions',
    title: 'Вопросы',
  },
];

const Questions = () => {
  return (
    <Layout>
      <SEO title="ask" />
      <DetailHeader links={links} />
      <FAQWrapper title="Вопрос-ответ" />
      <ConsultationBanner />
    </Layout>
  );
};

export default Questions;
