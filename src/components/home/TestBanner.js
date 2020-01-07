import React from 'react';
import { Container } from 'react-bootstrap';
import AccentButton from '../reusable/AccentButton';
import './testCard.sass';

const TestBanner = () => {
  return (
    <Container fluid className="test-banner mx-sm-auto">
      <h2 className="test-banner-title" >Что нужно для начала процесса иммиграции в Канаду?</h2>
      <p className="test-banner-text">Пройдите тест на бесплатную оценку шансов</p>
      <AccentButton shadow id="test-banner-action-button" title="Бесплатная оценка шансов" to="/chance" />
    </Container>
  );
};

export default TestBanner;
