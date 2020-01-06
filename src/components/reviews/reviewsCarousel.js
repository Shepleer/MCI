import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./reviews.sass";
import AccentButton from "../reusable/AccentButton";

const Review = ({ avatar, name, text }) => {
  return (
    <div className="review-wrapper">
      <div className="review">
        <Image src={avatar} roundedCircle />
        <div className="review-description">
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsCarousel = ({ reviews }) => {
  return (
    <div className="review-container">
      <h4>Отзывы</h4>
      <p>Каждый день мы работаем на результат. Каждый клиент важен для нас</p>
      <Carousel className="reviewCarouselSlide" indicators={false} interval={null} controls={true}>
        {
          reviews.map(item => {
            const { avatar: { childImageSharp: { fixed: { src } } }, name, description } = item;
            return (
              <Carousel.Item>
                <Review avatar={src} name={name} text={description} />
              </Carousel.Item>
            );
          })
        }
      </Carousel>
      <AccentButton transparent />
    </div>
  );
};

export default ReviewsCarousel;
