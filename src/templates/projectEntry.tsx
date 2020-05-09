import * as React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import ProjectTitleBreadCrump from "../components/ProjectTitleBreadCrumb";
import { getEmSize } from "../styles/mixins";
import { widths, breakpoints, dimensions, themeLight } from "../styles/variables";

const colorTheme = themeLight;

const xl = `@media (min-width: ${getEmSize(breakpoints.xl)}em)`;

const StyledContainerDiv = styled.div`
  width: 100%;
  height: 100%;

  ${xl} {
    width: ${getEmSize(widths.xl)}em;
    margin: 0 auto;
  }
`;

const StyledDescription = styled.div`
  width: 100%;

  ${xl} {
    width: ${getEmSize(widths.xl)}em;
    margin: auto;
  }
`;

const StyledDate = styled.div`
  color: ${colorTheme.dates};
  font-size: ${dimensions.headingSizes.h4}rem;
  margin-bottom: 20px;
`;

interface PageTemplateProps {
  data: {
    contentfulProjectEntry: ProjectEntry;
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const projectEntry = data.contentfulProjectEntry;
  const description = projectEntry.description;
  const descriptionHtml = description && description.childMarkdownRemark.html;
  const startDate = projectEntry.startDate ? new Date(projectEntry.startDate) : undefined;
  let journeyHtml: string | undefined;

  if (projectEntry.layout && projectEntry.layout.toLowerCase() === "journey") {
    journeyHtml = projectEntry.journey && projectEntry.journey.childMarkdownRemark.html;
  }

  return (
    <IndexLayout>
      <Page>
        <StyledContainerDiv>
          <ProjectTitleBreadCrump title={projectEntry.title} parent={projectEntry.parentProject}></ProjectTitleBreadCrump>
          {startDate && <StyledDate>{startDate.toDateString()}</StyledDate>}
          {/* eslint-disable-next-line react/no-danger */}
          {!journeyHtml && descriptionHtml && (
            <StyledDescription>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            </StyledDescription>
          )}

          {journeyHtml && <div className="project-entry-journey" dangerouslySetInnerHTML={{ __html: journeyHtml }}></div>}
        </StyledContainerDiv>
      </Page>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query projectEntryPageQuery($slug: String!) {
    contentfulProjectEntry(slug: { eq: $slug }) {
      slug
      title
      layout
      startDate
      journey {
        childMarkdownRemark {
          html
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
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
    }
  }
`;
