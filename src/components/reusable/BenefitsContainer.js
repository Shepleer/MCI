import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Benefits.sass';
import visa from './../../images/benefits/visa.png';
import family from './../../images/benefits/family.png';
import luggage from './../../images/benefits/luggage.png';

const Benefit = ({ image, title, text }) => {
  return (
    <div className="benefit">
      <div className="image-container">
      <Image src={image} />
      </div>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
};

const BenefitsContainer = () => {
  return (
      <Container fluid={true} className="benefits-container">
        <Row>
          <Col>
            <Benefit image={luggage} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Иммиграция" />
          </Col>
          <Col>
            <Benefit image={visa} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Визы" />
          </Col>
          <Col>
            <Benefit image={family} text="Иммиграция для родителей, бабушек/дедушек, супруга, детей, усыновление" title="Семейное Спонсорство" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Benefit image={luggage} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Иммиграция" />
          </Col>
          <Col>
            <Benefit image={visa} text="Экспресс иммиграция в Канаду до 6 месяцев, программа Express Entry" title="Визы" />
          </Col>
          <Col>
            <Benefit image={family} text="Иммиграция для родителей, бабушек/дедушек, супруга, детей, усыновление" title="Семейное Спонсорство" />
          </Col>
        </Row>
      </Container>
  );
};

export default BenefitsContainer;
