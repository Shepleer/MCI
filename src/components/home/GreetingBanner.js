import React from 'react';
import AccentButton from '../reusable/AccentButton';
import { Container } from 'react-bootstrap';
import './greetingBanner.sass'

const GreetingBanner = () => {
  return (
    <Container className=" text-center pt-5 pb-5 greeting-banner">
      <h1>С ЧЕГО НАЧАТЬ ПРОЦЕСС ИММИГРАЦИИ В КАНАДУ В 2019 ГОДУ?</h1>
      <p>Пройдите оценку шансов и получите самое выгодное предложение по иммиграции в Канаду</p>
      <AccentButton className="accent-button accent-button-md-shadow" title="Бесплатная оценка шансов" to="/chance" />
    </Container>
  );
};

export default GreetingBanner;
