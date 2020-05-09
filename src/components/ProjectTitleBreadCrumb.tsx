import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions, widths, breakpoints } from "../styles/variables";
import { Link } from "gatsby";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const xl = `@media (min-width: ${getEmSize(breakpoints.xl)}em)`;
const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const StyledTitleContainerDiv = styled.div`
  width: 100%;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  ${xl} {
    width: ${getEmSize(widths.xl)}em;
    margin: auto;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: ${colorTheme.activeItem};
  }
`;

const SytledTitle = styled.span`
  font-size: ${dimensions.headingSizes.h3}rem;

  ${lg} {
    font-size: ${dimensions.headingSizes.h1}rem;
  }
`;

const StyledBreadCrumbEntry = styled(Link)`
  font-size: ${dimensions.fontSize.regular}px;
  color: ${colorTheme.buttonSecondary};

  ${lg} {
    font-size: ${dimensions.headingSizes.h4}rem;
  }
`;

const StyledBreadCrumbSeparator = styled.span`
  font-size: ${dimensions.fontSize.large}px;
  color: ${colorTheme.dates};
  &:after {
    content: "\u232a";
  }
  padding: 0px 8px;
`;

interface ProjectTitleBreadCrumpProps {
  title: string;
  parent?: ProjectType;
}

function createBreadCrumbEntry(text: string, link: string) {
  return (
    <>
      <StyledBreadCrumbEntry to={link} key="link">
        {text}
      </StyledBreadCrumbEntry>{" "}
      <StyledBreadCrumbSeparator />
    </>
  );
}

const ProjectTitleBreadCrump: React.FC<ProjectTitleBreadCrumpProps> = function(props) {
  const breadCrumbEntries = [];
  breadCrumbEntries.push(createBreadCrumbEntry("Home", "/"));

  let breadCrumbProjects = [];
  let parentProject = props.parent;
  while (parentProject) {
    const link = "/projecttype/" + parentProject.slug;
    breadCrumbProjects.push(createBreadCrumbEntry(parentProject.title, link));
    parentProject = parentProject.parentProject;
  }

  breadCrumbProjects = breadCrumbProjects.reverse();

  breadCrumbEntries.push(...breadCrumbProjects);

  return (
    <StyledTitleContainerDiv>
      {breadCrumbEntries}
      <SytledTitle>{props.title}</SytledTitle>
    </StyledTitleContainerDiv>
  );
};

export default ProjectTitleBreadCrump;
