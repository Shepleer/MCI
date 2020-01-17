import React from "react";
import Layout from "../components/layout";
import RelativeNav from "../components/header/RelativeNav";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";
import FeedbackCall from "../components/reusable/forms/feedbackCall/FeedbackCall";
import { graphql, useStaticQuery } from "gatsby";
import ReviewsCarousel from "../components/reusable/reviews/ReviewsCarousel";

const links = [
  {
    link: '/',
    title: 'Главная',
  },
  {
    link: '/reviews',
    title: 'Отзывы',
  },
];

const ReviewsPage = () => {

  const data = useStaticQuery(graphql`
    query {
        reviewsData: allMarkdownRemark(filter: {frontmatter: {path: {eq: "reviews"}}}) {
            reviews: edges {
                node {
                    id
                    frontmatter {
                        avatar {
                            childImageSharp {
                                fixed {
                                    src
                                }
                            }
                        }
                        name
                        description
                    }
                }
            }
        }
    }
  `);

  const { reviewsData: { reviews } } = data;
  const reviewsItems = reviews.map(element => element.node.frontmatter);

  return (
    <Layout>
      <RelativeNav links={links} />
      <DescriptionTitle title="Отзывы" detail="Каждый день мы работаем на результат. Каждый клиент важен для нас" />
      <ReviewsCarousel reviews={reviewsItems}/>
      <FeedbackCall/>
    </Layout>
  );
};

export default ReviewsPage;
