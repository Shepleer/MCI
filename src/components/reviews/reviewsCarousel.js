import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './reviews.sass';
import reviewWoman from './../../images/other/review-woman.jpg';

const Review = ({ name="Евгения" }) => {
  return (
    <div className="review-wrapper">
      <div className="review">
        <Image src={reviewWoman} roundedCircle />
        <div className="review-description">
          <h4>{name}</h4>
          <p>Хочу от всего сердца поблагодарить иммиграционное агентство Maple. Всё было быстро, профессионально и ровно
            через год
            я в Канаде со всей семьёй. Может это и звучит как реклама,
            но пусть и другие люди узнают об этой замечательной компании </p>
        </div>
      </div>
    </div>
  );
};

const ReviewsCarousel = () => {
  return (
    <div className="review-container">
      <h4>Отзывы</h4>
      <p>Каждый день мы работаем на результат. Каждый клиент важен для нас</p>
      <div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <a href="#" role="button" data-slide="prev">
            <div className="carousel-nav-icon">
            HELLO
            </div>
          </a>
        </div>
        <Carousel id="reviewCarouselSlide" indicators={false} interval={null} controls={false}>
          <Carousel.Item>
            <Review name="dasd" />
          </Carousel.Item>
          <Carousel.Item>
            <Review />
          </Carousel.Item>
          <Carousel.Item>
            <Review />
          </Carousel.Item>
        </Carousel>
        <div></div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
