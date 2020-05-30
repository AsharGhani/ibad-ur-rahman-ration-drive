import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, breakpoints, dimensions } from "./variables";
import { getEmSize } from "./mixins";

const colorTheme = themeLight;
const md = `@media (min-width: ${getEmSize(breakpoints.md)}em)`;

const StyledLinkButton = styled.div`
  text-align: center;
  background: ${colorTheme.button};
  color: ${colorTheme.buttonText};
  font-size: ${dimensions.fontSize.small}px;
  text-decoration: none;
  padding: 4px 8px;
  width: 120px;
  margin: 0px auto;
  &:focus,
  &:hover {
    text-decoration: none !important;
    background: ${colorTheme.buttonHover};
  }

  ${md} {
    margin: 0;
  }
`;

const ContentsCentered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ContentsCentered, StyledLinkButton };
