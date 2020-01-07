import React from 'react';
import Layout from '../components/layout';
import RelativeNav from '../components/header/RelativeNav';
import DescriptionTitle from '../components/DescriptionWrapper/DescriptionTitle';
import FeedbackCall from '../components/reusable/forms/feedbackCall/FeedbackCall';
import ContactFormContainer from '../components/reusable/forms/contactForm/ContactForm';
import ContactMap from "../components/reusable/contactMap/ContactMap";

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
      <RelativeNav links={links} />
      <DescriptionTitle title="Контакты" />
      <FeedbackCall />
      <ContactMap/>
      <ContactFormContainer />
    </Layout>
  );
};

export default Contact;
