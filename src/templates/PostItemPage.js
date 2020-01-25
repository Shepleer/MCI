import React from "react";
import Layout from "../components/layout";
import DescriptionTitle from "../components/DescriptionWrapper/DescriptionTitle";
import MainText from "../components/DescriptionWrapper/MainText";
import RelativeNav from "../components/header/RelativeNav";
import './postItemPage.sass';

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

const NewsContentItem = ({ image, markdown, }) => {
  return (
    <div className="post-item-wrapper">
      <img className="post-item-image" src={image} />
      <MainText html={markdown} />
    </div>
  );
};

const PostItemPage = ({ pageContext }) => {

  const { slug: { slug }, title, html, coverImageSource } = pageContext;
  console.log(slug);

  const currentLink = {
    link: slug,
    title,
  };

  return (
    <Layout>
      <RelativeNav links={[...links, currentLink]} />
      <DescriptionTitle title={title} />
      <NewsContentItem image={coverImageSource} markdown={html} />
    </Layout>
  );
};

export default PostItemPage;
