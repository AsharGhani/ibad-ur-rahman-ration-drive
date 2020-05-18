import IndexLayout from "../layouts";
import Page from "../components/Page";
import Container from "../components/Container";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { getEmSize } from "../styles/mixins";
import { breakpoints } from "../styles/variables";

const md = `@media (min-width: ${getEmSize(breakpoints.md)}em)`;
const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const StyledDescription = styled.div``;
const StyledSubHeading = styled.h3``;
const StyledTable = styled.table`
  border: none;
  width: auto;
  margin-top: 1rem;
  margin-left: 3rem;
`;
const StyledTD = styled.td`
  max-width: 10rem;
  border: none;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  ${md} {
    margin: 0;
    width: 100%;
  }
`;

const RightfloatedDiv = styled.div`
  width: 100%;
  margin: 24px 0;

  ${md} {
    width: 350px;
    float: right;
    margin: 24px 16px 0 16px;
  }

  ${lg} {
    width: 400px;
    margin: 24px 16px 24px 16px;
  }
`;

const StyledClearFloat = styled.div`
  clear: both;
`;

interface StaticQueryProps {
  allFile: {
    nodes: ChildImageSharpNode[];
  };
}

const AboutPage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query AboutPageImages {
        allFile(filter: { relativePath: { regex: "/images/about/" } }) {
          nodes {
            name
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const allImageNodes = data.allFile.nodes;
      const surahAlBaladImage = allImageNodes.find(childNode => childNode.name.endsWith("surah-al-balad"));
      const rationImage = allImageNodes.find(childNode => childNode.name.endsWith("ration"));
      return (
        <IndexLayout>
          <Page>
            <Container>
              <h1>Ibaad-ur-Rahman Foundation</h1>
              <StyledDescription>
                This is not the work of an individual. It is the work of Allah who put in the hearts of a group of like-minded to come
                together to serve the underprivileged and improve their own life in the hereafter
              </StyledDescription>

              <h2>About the Ration Drive</h2>
              <StyledDescription>Monthly Ration for Daily Wage Earner Impacted by COVID-19 Job Loss</StyledDescription>
              <RightfloatedDiv>
                <ImageContainer>
                  {surahAlBaladImage && (
                    <Img
                      fluid={surahAlBaladImage.childImageSharp.fluid}
                      alt={surahAlBaladImage.name}
                      key={surahAlBaladImage.name}
                      style={{ width: "100%" }}
                    ></Img>
                  )}
                </ImageContainer>
              </RightfloatedDiv>
              <StyledSubHeading>What</StyledSubHeading>
              <StyledDescription>
                Help families that are effected by the COVID-19 situation where the bread earners have lost their job
              </StyledDescription>
              <StyledSubHeading>How</StyledSubHeading>
              <StyledDescription>
                Partner with trusted sources to buy ration at affordable rates, and filter the candidates to identify deserving families,
                and deliver the ration to their doorstep (if possible)
              </StyledDescription>
              <StyledSubHeading>Eligibility</StyledSubHeading>
              <StyledDescription>Sadaqah and Zakaat are accepted</StyledDescription>
              <StyledSubHeading>Cost</StyledSubHeading>
              <StyledDescription>
                Cost varries depending on the distribution area. For example, in Karachi it was Rs 3300 (approx. C$ 30) for a pack of ration
                covering a family of 7 for 10 days
              </StyledDescription>
              <StyledClearFloat />
              <StyledSubHeading>Package Contents</StyledSubHeading>
              <RightfloatedDiv>
                <ImageContainer>
                  {rationImage && (
                    <Img
                      fluid={rationImage.childImageSharp.fluid}
                      alt={rationImage.name}
                      key={rationImage.name}
                      style={{ width: "100%" }}
                    ></Img>
                  )}
                </ImageContainer>
              </RightfloatedDiv>
              <StyledDescription>
                A typical ration bag contains:
                <StyledTable>
                  <tr>
                    <StyledTD>Sugar</StyledTD>
                    <StyledTD> 5 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Chakki ka ata</StyledTD>
                    <StyledTD>10 kg</StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Basmati Rice (386)</StyledTD>
                    <StyledTD> 5 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Safeguard soap</StyledTD>
                    <StyledTD> 3 bars </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Daal Chana</StyledTD>
                    <StyledTD> 1 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Daal Moong</StyledTD>
                    <StyledTD> 1 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Daal Masoor</StyledTD>
                    <StyledTD> 1 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Kali Daal</StyledTD>
                    <StyledTD> 1 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Daal Maash</StyledTD>
                    <StyledTD> 1 kg </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Salt</StyledTD>
                    <StyledTD> 800 gm </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Cooking Oil</StyledTD>
                    <StyledTD> 5 ltr </StyledTD>
                  </tr>
                  <tr>
                    <StyledTD>Tea</StyledTD>
                    <StyledTD> 385 gm </StyledTD>
                  </tr>
                </StyledTable>
              </StyledDescription>
            </Container>
          </Page>
        </IndexLayout>
      );
    }}
  />
);

export default AboutPage;
