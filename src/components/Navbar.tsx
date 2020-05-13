import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { themeLight, heights, dimensions, breakpoints } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

/*display: flex;
  flex: 1 0 50%;*/
const StyledNavbar = styled.nav`
  margin: 0px;
  padding: 0px;
  width: 100%;
  font-size: ${dimensions.fontSize.small}px;

  ${lg} {
    font-size: ${dimensions.fontSize.regular}px;
  }
`; // reset margins and paddings

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
`;

const MenuItem = styled.li`
  display: block;
  list-style-type: none;
  text-transform: none;
  flex: 1 0 auto;
`;

const SubMenu = styled.ul`
  z-index: 5;
  display: none;
  position: absolute;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  padding: 0px;
  &:hover {
    display: flex;
  }

  nav ul li:hover > & {
    display: block;
  }
`;

const SubMenuItem = styled.li`
  list-style-type: none;
  min-width: 10rem;
  color: ${colorTheme.navBarText};
`;

const NonLinedMenuItem = styled.div`
  width: auto;
  display: block;
  text-align: center;
  text-decoration: none;
  background: ${colorTheme.background1};
  color: ${colorTheme.navBarText};
  padding: 0.5rem;
  transition: background-color 0.3 ease;

  ${lg} {
    padding: 1rem;
  }
  &:focus,
  &:hover {
    text-decoration: none;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    transform: scaleX(0);
    height: 0.125rem;
    left: 0.0625rem;
    background-color: ${colorTheme.activeItem};
    transform-origin: 100% 50%;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:focus:after,
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
  & a {
    width: 100%;
  }
`;

const MenuItemLink = styled(Link)`
  width: auto;
  display: block;
  text-align: center;
  text-decoration: none;
  background: ${colorTheme.background1};
  color: ${colorTheme.navBarText};
  padding: 0.5rem;
  transition: background-color 0.3 ease;

  ${lg} {
    padding: 1rem;
  }
  &:focus,
  &:hover {
    text-decoration: none;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    transform: scaleX(0);
    height: 0.125rem;
    left: 0.0625rem;
    background-color: ${colorTheme.activeItem};
    transform-origin: 100% 50%;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:focus:after,
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
  & a {
    width: 100%;
  }
`;

interface StaticQueryProps {
  allContentfulProjectType: {
    edges: [
      {
        node: ProjectType;
      },
    ];
  };
}

const Navbar: React.FC = () => (
  <StaticQuery
    query={graphql`
      query NavbarAllProjectTypeQuery {
        allContentfulProjectType(limit: 1000, filter: { parentProject: { slug: { eq: "ration-drive" } } }) {
          edges {
            node {
              slug
              title
              parentProject {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const projectsSubMenuLinks: React.ReactNode[] = [];
      for (const { node } of data.allContentfulProjectType.edges) {
        projectsSubMenuLinks.push(
          <SubMenuItem key={node.slug}>
            <MenuItemLink to={"/projecttype/" + node.slug} activeClassName="menu-link-active">
              {node.title}
            </MenuItemLink>
          </SubMenuItem>,
        );
      }
      return (
        <StyledNavbar id="nav-bar">
          <Menu>
            <MenuItem>
              <MenuItemLink to="/about" activeClassName="menu-link-active">
                About
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <NonLinedMenuItem>All Projects</NonLinedMenuItem>
              <SubMenu>{projectsSubMenuLinks}</SubMenu>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/contact-us" activeClassName="menu-link-active">
                Contact Us
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </StyledNavbar>
      );
    }}
  ></StaticQuery>
);

export default Navbar;
