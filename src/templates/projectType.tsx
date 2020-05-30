import * as React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import PictureCard from "../components/PictureCard";
import ProjectTitleBreadCrump from "../components/ProjectTitleBreadCrumb";
import { getEmSize } from "../styles/mixins";
import { widths, breakpoints } from "../styles/variables";
import UpdateCard from "../components/UpdateCard";
import { StyledLinkButton, ContentsCentered } from "../styles/styledComponents";

const xl = `@media (min-width: ${getEmSize(breakpoints.xl)}em)`;

const StyledDescription = styled.div`
  width: 100%;

  ${xl} {
    width: ${getEmSize(widths.xl)}em;
    margin: auto;
  }
`;

const StyledChildLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

interface PageTemplateProps {
  data: {
    contentfulProjectType: ProjectType;
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const projectType = data.contentfulProjectType;
  const childDescriptionNode = projectType.description;
  const descriptionHtml = childDescriptionNode && childDescriptionNode.childMarkdownRemark.html;

  const childProjectTypeCards: React.ReactNode[] = [];
  const childProjectEntryCards: React.ReactNode[] = [];

  if (projectType.childProjectTypes) {
    for (const childProjectType of projectType.childProjectTypes) {
      childProjectTypeCards.push(
        <PictureCard
          title={childProjectType.title}
          description={childProjectType.description && childProjectType.description.childMarkdownRemark.internal.content}
          imageSrc={childProjectType.featureImage && childProjectType.featureImage.fluid.src}
          imageTitle={childProjectType.featureImage && childProjectType.featureImage.title}
          link={"/projecttype/" + childProjectType.slug}
          key={childProjectType.slug}
        ></PictureCard>,
      );
    }
  }

  let goToStartButton: React.ReactNode;
  if (projectType.childProjectsList) {
    const sortedProjectsList = projectType.childProjectsList.sort((projectA, projectB) =>
      projectA.startDate < projectB.startDate ? 1 : -1,
    );

    if (projectType.layout && projectType.layout === "UpdatesList") {
      goToStartButton = (
        <ContentsCentered>
          <a href={"#footer"}>
            <StyledLinkButton style={{ width: "auto" }}>Go to the first update</StyledLinkButton>
          </a>
        </ContentsCentered>
      );
    }

    for (const childProjectEntry of sortedProjectsList) {
      let link: string | undefined;
      if (childProjectEntry.layout !== "NoPage") {
        link = "/projectentry/" + childProjectEntry.slug;
      }

      let entryCard: React.ReactNode;

      if (projectType.layout && projectType.layout === "UpdatesList") {
        const dateValue = childProjectEntry.startDate ? new Date(childProjectEntry.startDate) : undefined;
        entryCard = (
          <UpdateCard
            title={childProjectEntry.title}
            description={childProjectEntry.description && childProjectEntry.description.childMarkdownRemark.internal.content}
            imageSrc={childProjectEntry.featureImage && childProjectEntry.featureImage.fluid.src}
            imageTitle={childProjectEntry.featureImage && childProjectEntry.featureImage.title}
            link={link}
            date={dateValue}
            key={childProjectEntry.slug}
          ></UpdateCard>
        );
      } else {
        entryCard = (
          <PictureCard
            title={childProjectEntry.title}
            description={childProjectEntry.description && childProjectEntry.description.childMarkdownRemark.internal.content}
            imageSrc={childProjectEntry.featureImage && childProjectEntry.featureImage.fluid.src}
            imageTitle={childProjectEntry.featureImage && childProjectEntry.featureImage.title}
            link={link}
            key={childProjectEntry.slug}
          ></PictureCard>
        );
      }

      childProjectEntryCards.push(entryCard);
    }
  }

  return (
    <IndexLayout>
      <Page>
        <div className="maxWidth">
          <ProjectTitleBreadCrump title={projectType.title} parent={projectType.parentProject}></ProjectTitleBreadCrump>
          {/* eslint-disable-next-line react/no-danger */}
          {descriptionHtml && (
            <StyledDescription>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            </StyledDescription>
          )}
          {goToStartButton}
          <StyledChildLinksContainer>
            {childProjectTypeCards}
            {childProjectEntryCards}
          </StyledChildLinksContainer>
        </div>
      </Page>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query projectTypePageQuery($slug: String!) {
    contentfulProjectType(slug: { eq: $slug }) {
      slug
      title
      startDate
      layout
      parentProject {
        slug
        parentProject {
          slug
          parentProject {
            slug
            title
          }
          title
        }
        title
      }
      childProjectsList {
        slug
        title
        layout
        startDate
        featureImage {
          fluid {
            src
          }
          title
        }
        description {
          childMarkdownRemark {
            html
            internal {
              content
            }
          }
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      childProjectTypes {
        slug
        title
        startDate
        description {
          childMarkdownRemark {
            html
            internal {
              content
            }
          }
        }
        featureImage {
          fluid {
            src
          }
          title
        }
      }
    }
  }
`;
