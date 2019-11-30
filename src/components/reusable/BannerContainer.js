import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.sass'
import AccentButton from './AccentButton';
import city from './../../images/city-big.png'

const BannerContainer = () => {
  // return (
  //   <div className="banner-container">
  //     <h1>Hello world</h1>
  //     <h2>Пройдите оценку шансов и получите самое выгодное предложение по иммиграции в Канаду</h2>
  //     <AccentButton/>
  //   </div>
  // );

  return (
    <Card className="banner-container">
      <Card.Img src={city} alt="City image" />
      <Card.ImgOverlay>
        <h1>С ЧЕГО НАЧАТЬ ПРОЦЕСС ИММИГРАЦИИ В КАНАДУ В 2019 ГОДУ?</h1>
        <p>Пройдите оценку шансов и получите самое выгодное предложение по иммиграции в Канаду</p>
        <Card.Link><AccentButton className="accent-button btn accent-button-shadow" /></Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BannerContainer;
