import React from "react";
import Layout from "../components/layout";
import RelativeNav from "../components/header/RelativeNav";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";
import FeedbackCall from "../components/reusable/forms/feedbackCall/FeedbackCall";
import ConsultationForm from "../components/reusable/forms/consultationForm/ConsultationForm";

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/consultation',
    title: 'Консультация ',
  },
];

const ConsultationPage = () => {
  return (
    <Layout>
      <RelativeNav links={links} />
      <DescriptionTitle title="Получить консультацию" detail="В течение одного рабочего дня с Вами свяжется координатор встреч" />
      <ConsultationForm title="Форма связи с координатором" />
      <FeedbackCall/>
    </Layout>
  );
};

export default ConsultationPage;
