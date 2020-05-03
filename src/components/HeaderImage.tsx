import * as React from "react";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { themeLight, heights } from "../styles/variables";

const colorTheme = themeLight;

interface StaticQueryProps {
  file: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const StyledHeaderImageContainer = styled.div`
  line-height: ${heights.header};
  box-shadow: 0 0 20px 5px ${colorTheme.background1};
  border-radius: 50px;
  width: ${heights.header + 20}px;
  height: ${heights.header + 20}px;
  background: ${colorTheme.background1};
  margin-right: 20px;
  transition: 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 0 20px 10px ${colorTheme.background2};
    width: ${heights.header + 25}px;
  }
`;

const StyledHeaderImageContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

const HeaderImage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query headerImage {
        file(relativePath: { eq: "images/logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledHeaderImageContainer>
        <StyledHeaderImageContents>
          <Img fluid={data.file.childImageSharp.fluid} alt="header image" style={{ width: "100%" }} />
        </StyledHeaderImageContents>
      </StyledHeaderImageContainer>
    )}
  />
);

export default HeaderImage;
