import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors, themeLight, breakpoints } from "../styles/variables";
import Container from "./Container";
import HeaderImage from "./HeaderImage";
import Navbar from "./Navbar";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const StyledHeader = styled.header`
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const HomepageLink = styled(Link)`
  color: ${colorTheme.headerText};
  font-size: ${dimensions.headingSizes.h1}rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Rage Italic", "Lucida Bright", serif;
  font-weight: 500;
  padding-right: 1rem;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const NavBarContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 9999;
`;

const SecondaryTitleContainer = styled.div`
  font-size: ${dimensions.headingSizes.h3}rem;
  color: ${colorTheme.activeItem};
  padding-bottom: 8px;
`;

interface HeaderProps {
  title: string;
  secondaryTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, secondaryTitle }) => (
  <>
    <StyledHeader>
      <HeaderInner>
        <HomepageLink to="/">
          <HeaderImage />
          {title}
        </HomepageLink>
        <SecondaryTitleContainer>{secondaryTitle}</SecondaryTitleContainer>
        <NavBarContainer>
          <Navbar></Navbar>
        </NavBarContainer>
      </HeaderInner>
    </StyledHeader>
  </>
);

export default Header;
