import React from "react";
import { Carousel, Image } from "react-bootstrap";
import client from "../../images/services/client.png";
import dice from "../../images/services/dice.png";
import airplane from "../../images/services/airplane.png";
import copy from "../../images/services/copy.svg";
import file from "../../images/services/file.svg";
import info from "../../images/services/info.svg";
import "./servicesContainer.sass";

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
        <Service image={copy} text="Контракт с канадским лицензированным специалистом по иммиграции" />
        <Service image={info} text="Полное информационное сопровождение в течение всего процесса " />
        <Service image={file} text="Оформление пакета документов для Министерства гражданства и иммиграции Канады" />
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
        <Carousel.Item>
          <Service image={copy} text="Контракт с канадским лицензированным специалистом по иммиграции" />
        </Carousel.Item>
        <Carousel.Item>
          <Service image={info} text="Полное информационное сопровождение в течение всего процесса " />
        </Carousel.Item>
        <Carousel.Item>
          <Service image={file} text="Оформление пакета документов для Министерства гражданства и иммиграции Канады" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
