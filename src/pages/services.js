import React from "react"
import Layout from "../components/layout"
import MainText from "../components/DescriptionWrapper/MainText"
import LinkBannersContainer from "../components/reusable/linkBanner/LinkBannersContainer"
import DescriptionWrapper from "../components/DescriptionWrapper/DescriptionWrapper"
import { graphql, useStaticQuery } from "gatsby"

const Services = () => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        titleDescription,
        immigrationDescription,
        visaDescription,
        lmiaDescription,
        humanitiesDescription,
        citizenshipDescription,
      },
      html,
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { templateKey: { eq: "services-page-content" } }
      ) {
        frontmatter {
          title
          titleDescription
          immigrationDescription
          visaDescription
          lmiaDescription
          humanitiesDescription
          citizenshipDescription
        }
        html
      }
    }
  `)

  const services = [
    {
      title: "Иммиграция",
      text: immigrationDescription,
      linkTitle: "Подробнее",
      to: "/immigration",
    },
    {
      title: "Визы",
      text: visaDescription,
      linkTitle: "Подробнее",
      to: "/visa",
    },
    {
      title: "LMIA",
      text: lmiaDescription,
      linkTitle: "Подробнее",
      to: "/lmia",
    },
    {
      title: "Гуманитарная программа",
      text: humanitiesDescription,
      linkTitle: "Подробнее",
      to: "/humanities",
    },
    {
      title: "Гражданство",
      text: citizenshipDescription,
      linkTitle: "Подробнее",
      to: "/citizenship",
    },
  ]

  return (
    <Layout>
      <DescriptionWrapper title={title} titleDetail={titleDescription}>
        <MainText html={html} />
        <LinkBannersContainer items={services} />
      </DescriptionWrapper>
    </Layout>
  )
}

export default Services
