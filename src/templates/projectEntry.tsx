import * as React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import ProjectTitleBreadCrump from "../components/ProjectTitleBreadCrumb";
import { getEmSize } from "../styles/mixins";
import { widths, breakpoints } from "../styles/variables";

const xl = `@media (min-width: ${getEmSize(breakpoints.xl)}em)`;

const StyledDescription = styled.div`
  width: 100%;

  ${xl} {
    width: ${getEmSize(widths.xl)}em;
    margin: auto;
  }
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

  let journeyHtml: string | undefined;

  if (projectEntry.layout && projectEntry.layout.toLowerCase() === "journey") {
    journeyHtml = projectEntry.journey && projectEntry.journey.childMarkdownRemark.html;
  }

  return (
    <IndexLayout>
      <Page>
        <div className="maxWidth">
          <ProjectTitleBreadCrump title={projectEntry.title} parent={projectEntry.parentProject}></ProjectTitleBreadCrump>
          {/* eslint-disable-next-line react/no-danger */}
          {!journeyHtml && descriptionHtml && (
            <StyledDescription>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            </StyledDescription>
          )}

          {journeyHtml && <div dangerouslySetInnerHTML={{ __html: journeyHtml }}></div>}
        </div>
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
