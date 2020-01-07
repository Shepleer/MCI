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

const ReviewsCarousel = ({ title = null, detailTitle = null, reviews }) => {
  return (
    <div className="review-container">
      <div className="review-header">
        {title && <h4>{title}</h4>}
        {detailTitle && <p>{detailTitle}</p>}
      </div>
      <div className="carousel-content">
        <div className="brackets">
          <svg width="130" height="139" viewBox="0 0 130 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.1 49.2959C129.1 22.3756 107.305 0.555084 80.4222 0.555084C53.5389 0.555084 31.7464 22.3756 31.7464 49.2959C31.7464 76.2163 53.5389 98.0368 80.4247 98.0368C81.0029 98.0368 81.5635 97.971 82.1368 97.9508C49.3445 130.517 13.368 120.601 11.3857 120.017C9.23554 119.367 6.91592 119.6 4.93712 120.663C2.95832 121.727 1.48243 123.534 0.834137 125.687C0.185844 127.839 0.418247 130.162 1.48022 132.143C2.5422 134.125 4.34675 135.603 6.4969 136.252C6.73427 136.322 14.4917 138.555 26.3172 138.555C48.6955 138.555 85.6291 130.517 113.765 84.7523C118.609 80.2082 122.47 74.7166 125.107 68.6176C127.745 62.5186 129.104 55.9423 129.1 49.2959Z" fill="#F9F9F9" />
          </svg>
          <svg width="130" height="139" viewBox="0 0 130 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M129.1 49.2959C129.1 22.3756 107.305 0.555084 80.4222 0.555084C53.5389 0.555084 31.7464 22.3756 31.7464 49.2959C31.7464 76.2163 53.5389 98.0368 80.4247 98.0368C81.0029 98.0368 81.5635 97.971 82.1368 97.9508C49.3445 130.517 13.368 120.601 11.3857 120.017C9.23554 119.367 6.91592 119.6 4.93712 120.663C2.95832 121.727 1.48243 123.534 0.834137 125.687C0.185844 127.839 0.418247 130.162 1.48022 132.143C2.5422 134.125 4.34675 135.603 6.4969 136.252C6.73427 136.322 14.4917 138.555 26.3172 138.555C48.6955 138.555 85.6291 130.517 113.765 84.7523C118.609 80.2082 122.47 74.7166 125.107 68.6176C127.745 62.5186 129.104 55.9423 129.1 49.2959Z" fill="#F9F9F9" />
          </svg>
        </div>
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
      </div>
      <AccentButton transparent />
    </div>
  );
};

export default ReviewsCarousel;
