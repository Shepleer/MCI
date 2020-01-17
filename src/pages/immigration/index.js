import React from "react";
import Layout from "../../components/layout";
import DescriptionWrapper from "../../components/DescriptionWrapper/DescriptionWrapper";
import MainText from "../../components/DescriptionWrapper/MainText";
import { graphql, useStaticQuery } from "gatsby";
import LinkBannersContainer from "../../components/reusable/linkBanner/LinkBannersContainer";

const ImmigrationPage = () => {

  const {
    markdownRemark: {
      frontmatter: {
        title,
        titleDescription,
        expressEntryDescription,
        provincialProgramsDescription,
        businessImmigrationDescription,
        familySponsorshipDescription,
        afterContentTopic,
      },
      html,
    }
  } = useStaticQuery(graphql`
      query {
          markdownRemark(frontmatter:{ templateKey:{eq:"immigration-page-content"}}) {
              frontmatter {
                  title
                  titleDescription
                  afterContentTopic
                  expressEntryDescription
                  provincialProgramsDescription
                  businessImmigrationDescription
                  familySponsorshipDescription
              }
              html
          }
      }
  `);

  const immigrationWays = [
    {
      title: 'Express Entry',
      text: expressEntryDescription,
      linkTitle: 'Подробнее',
      to: '/immigration/expressEntry',
    },
    {
      title: 'Провинциальные Программы',
      text: provincialProgramsDescription,
      linkTitle: 'Подробнее',
      to: '/immigration/provincialPrograms',
    },
    {
      title: 'Бизнес Иммиграция',
      text: businessImmigrationDescription,
      linkTitle: 'Подробнее',
      to: '/immigration/businessImmigration',
    },
    {
      title: 'Семейное Спонсорство',
      text: familySponsorshipDescription,
      linkTitle: 'Подробнее',
      to: '/immigration/familySponsorship',
    },
  ];

  return (
    <Layout>
      <DescriptionWrapper title={title} titleDetail={titleDescription}>
        <MainText html={html} />
        <LinkBannersContainer items={immigrationWays} />
      </DescriptionWrapper>
    </Layout>
  );
};

export default ImmigrationPage;
