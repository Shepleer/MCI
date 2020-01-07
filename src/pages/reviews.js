import React from "react";
import Layout from "../components/layout";
import RelativeNav from "../components/header/RelativeNav";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";
import FeedbackCall from "../components/reusable/forms/feedbackCall/FeedbackCall";
import { graphql, useStaticQuery } from "gatsby";

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/reviews',
    title: 'Отзывы',
  },
];

const ReviewsPage = () => {
  return (
    <Layout>
      <RelativeNav links={links} />
      <DescriptionTitle title="Отзывы" detail="Каждый день мы работаем на результат. Каждый клиент важен для нас" />

      <FeedbackCall/>
    </Layout>
  );
};

export default ReviewsPage;
