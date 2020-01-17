/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

const POSTS_PER_PAGE = 6;

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.templateKey === `news-item-content`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
      {
          allMarkdownRemark(
              filter: {frontmatter: {templateKey: {eq: "news-item-content"}}},
              sort: {fields: frontmatter___publishDate, order: DESC},
              limit: 500,
          ) {
              edges {
                  node {
                      fields {
                          slug
                      }
                      frontmatter {
                        title
                        coverImage {
                          childImageSharp {
                            fixed {
                              src
                            }
                          }
                        }
                        publishDate
                      }
                      html
                  }
              }
          }
      }
  `);

  if (result.errors) {
    console.log(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/page${i + 1}`,
      component: path.resolve("./src/templates/NewsList.js"),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        currentPage: i + 1,
        numPages
      }
    });
  });

  posts.forEach(({ node }) => {
    const {
      html,
      fields: slug,
      frontmatter: {
        title,
        coverImage
      }
    } = node;
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/PostItemPage.js`),
      context: {
        slug: slug,
        title,
        html,
        coverImageSource: coverImage.childImageSharp.fixed.src
      }
    });
  });
};
