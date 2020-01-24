import React from "react";
import NewsItem from "../components/news/NewsItem";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";
import RelativeNav from "../components/header/RelativeNav";
import NewsListNavigation from "./NewsListNavigation";

const links = [
  {
    link: "/",
    title: "Главная"
  },
  {
    link: "/news",
    title: "Новости"
  }
];

const NewsList = ({ data, pageContext }) => {
  const news = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      <RelativeNav links={links} />
      {currentPage === 1 &&
      <DescriptionTitle title="Новости" />
      }
      {
        news.map(({ node }, index) => {
          const {
            frontmatter: {
              title,
              detail,
              publishDate,
              coverImage: {
                childImageSharp: {
                  original: { src }
                }
              }
            },
            fields: { slug }
          } = node;
          const reverse = ++index % 2 === 0;



          return <NewsItem title={title} text={detail} date={publishDate} image={src} pathToItem={slug} reverse={reverse} />;
        })
      }
      <NewsListNavigation currentPage={currentPage} pagesCount={numPages} />
    </Layout>
  );
};

export const newsListQuery = graphql`
    query newsListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "news-item-content"}}},
            sort: {fields: [frontmatter___publishDate], order: DESC},
            limit: $limit,
            skip: $skip,
        ) {
            edges {
                node {
                    frontmatter {
                        coverImage {
                            childImageSharp {
                                original {
                                    src
                                }
                            }
                        }
                        title
                        detail
                        publishDate
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default NewsList;
