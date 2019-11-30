import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import airplane from './../../images/services/airplane.png';
import dice from './../../images/services/dice.png';
import client from './../../images/services/client.png';
import './Services.sass'

const Service = ({ image, text }) => {
  return (<div className="service">
    <div className="service-image-container"><Image src={image} /></div>
    <p>{text}</p>
  </div>);
};

const ServicesContainer = ({ title, text }) => {
  return (
    <Container className="services-wrapper">
      <Row className="justify-content-center"><h4 className="service-container-title">{title}</h4></Row>
      <Row className="justify-content-center"><p className="service-container-text">{text}</p></Row>
      <Row>
      <Container className="services-container">
        <Row>
          <Col>
            <Service image={client} text="Консультация" />
          </Col>
          <Col>
            <Service image={dice} text="Оценка шансов" />
          </Col>
          <Col>
            <Service image={airplane} text="Встреча в аэропорту" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Service image={client} text="Консультация" />
          </Col>
          <Col>
            <Service image={dice} text="Оценка шансов" />
          </Col>
          <Col>
            <Service image={airplane} text="Встреча в аэропорту" />
          </Col>
        </Row>
      </Container>
      </Row>
    </Container>
  );
};

export default ServicesContainer;
