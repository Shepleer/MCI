import React from 'react';
import Layout from '../../components/layout';
import LinkBannersContainer from '../../components/reusable/linkBanner/LinkBannersContainer';
import DescriptionTitle from '../../components/DescriptionWrapper/DescriptionTitle';

const LINK_ITEMS = [
  {
    title: 'Визы',
    text: 'Форма для оценки шансов на получение визы в Канаду',
    linkTitle: 'подробнее',
    to: '/chance/visa-form',
    background: true,
  },
  {
    title: 'Иммиграция',
    text: 'Форма для оценки шансов для иммиграции в Канаду',
    linkTitle: 'подробнее',
    to: '/chance/immigration-form',
    background: true,
  },
];

const Index = () => {
  return(
    <Layout>
      <DescriptionTitle title="Оценка шансов" />
      <LinkBannersContainer items={LINK_ITEMS} />
    </Layout>
  );
};

export default Index;
