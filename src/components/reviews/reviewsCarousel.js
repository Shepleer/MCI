import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './reviews.sass';
import reviewWoman from '../../../static/assets/review-woman.jpg';
import AccentButton from '../reusable/AccentButton';

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
        <Carousel className="reviewCarouselSlide" indicators={false} interval={null} controls={true}>
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
      <AccentButton transparent />
    </div>
  );
};

export default ReviewsCarousel;
