import React from 'react';
import Layout from '../components/layout';
import DescriptionTitle from '../components/DescriptionWrapper/DescriptionTitle';
import NewsItem from '../components/news/NewsItem';
import Image from './../../static/assets/Rectangle.jpg'

const NewsPage = () => {
  return (
    <Layout>
      <DescriptionTitle title="Новости" />
      <NewsItem title="Хочу иммигрировать в Канаду, с чего начать?" text="Каждый иммигрант в Канаде однозначно разный, и соответственно методы для иммиграции также...." image={Image}/>
    </Layout>
  );
};

export default NewsPage;
