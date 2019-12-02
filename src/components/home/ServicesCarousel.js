import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import client from '../../images/services/client.png';
import dice from '../../images/services/dice.png';
import airplane from '../../images/services/airplane.png';
import './servicesContainer.sass';

const Service = ({ image, text }) => {
  return (<div className="service">
    <div className="service-image-container"><Image src={image} /></div>
    <p className="service-text">{text}</p>
  </div>);
};

const ServicesCarousel = () => {
  return (
    <div className="services-container">
      <h4>Наши услуги</h4>
      <p>Каждый день мы работаем на результат. Каждый клиент важен для нас</p>
      <div className="services-row">
        <Service image={client} text="Консультация" />
        <Service image={dice} text="Оценка шансов" />
        <Service image={airplane} text="Встреча в аэропорту" />
      </div>
      <div className="services-row">
        <Service image={client} text="Консультация" />
        <Service image={dice} text="Оценка шансов" />
        <Service image={airplane} text="Встреча в аэропорту" />
      </div>

      <Carousel className="services-carousel" indicators={false} interval={null}>
        <Carousel.Item>
          <Service image={client} text="Консультация" />
        </Carousel.Item>
        <Carousel.Item>
          <Service image={dice} text="Оценка шансов" />
        </Carousel.Item>
        <Carousel.Item>
          <Service image={airplane} text="Встреча в аэропорту" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
