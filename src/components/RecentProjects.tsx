import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions } from "../styles/variables";
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby";

interface ProjectInfo {
  title: string;
  date: Date;
  slug: string;
}

const colorTheme = themeLight;

const StyledProjectInfoListContainer = styled.div`
  padding: 16px;
  margin-top: 30px;
  margin-right: 20px;
  box-shadow: 0 0 30px 2px ${colorTheme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  color: ${colorTheme.activeItem};
  font-size: ${dimensions.headingSizes.h4}rem;
  font-weight: 500;
`;

const StyleProjectInfo = styled.div`
  padding: 8px 0px;
`;

const StyledProjectTitle = styled.div`
  color: ${colorTheme.regularText};
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const StyledProjectDate = styled.div`
  color: ${colorTheme.dates};
  font-size: ${dimensions.fontSize.xsmall}px;
`;
const StyledProjectLink = styled.div`
  margin-top: 8px;
  display: inline-flex;
  justify-content: center;
  min-width: 10rem;
  background: ${colorTheme.button};
  color: ${colorTheme.buttonText};
  text-decoration: none;
  padding: 4px 8px;
  &:focus,
  &:hover {
    background: ${colorTheme.buttonHover};
    text-decoration: none;
  }
  font-size: ${dimensions.fontSize.large}px;
  font-weight: 500;
`;

interface StaticQueryProps {
  allContentfulProjectEntry: {
    edges: [
      {
        node: ProjectEntry;
      },
    ];
  };
}

const ProjectLinks: React.FC = () => {
  const data: StaticQueryProps = useStaticQuery(
    graphql`
      query ProjectLinksQuery {
        allContentfulProjectEntry(limit: 1000, filter: { parentProject: { slug: { eq: "ration-drive" } } }) {
          edges {
            node {
              slug
              title
              parentProject {
                slug
              }
              startDate
              status
            }
          }
        }
      }
    `,
  );

  const projects: ProjectInfo[] = [];
  for (const { node } of data.allContentfulProjectEntry.edges) {
    if (node.status.toLowerCase() !== "active") {
      continue;
    }

    projects.push({
      title: node.title,
      date: new Date(node.startDate),
      slug: node.slug,
    });
  }

  const renderedProjectInfos: React.ReactNode[] = [];
  for (const project of projects) {
    renderedProjectInfos.push(
      <StyleProjectInfo key={project.slug}>
        <StyledProjectDate>{/*project.date.toDateString()*/}</StyledProjectDate>
        <Link to={"/projectentry/" + project.slug}>
          <StyledProjectLink>{project.title}</StyledProjectLink>
        </Link>
      </StyleProjectInfo>,
    );
  }

  return (
    <StyledProjectInfoListContainer>
      <StyledHeader>Projects</StyledHeader>
      {renderedProjectInfos}
    </StyledProjectInfoListContainer>
  );
};

export default ProjectLinks;
