import IndexLayout from "../layouts";
import Page from "../components/Page";
import Container from "../components/Container";
import styled from "@emotion/styled";

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

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>About the Ration Drive</h1>
        <StyledDescription>Monthly Ration for Daily Wage Earner Impacted by COVID-19 Job Loss</StyledDescription>
        <StyledSubHeading>What</StyledSubHeading>
        <StyledDescription>
          Help families that are effected by the COVID-19 situation where the bread earners have lost their job
        </StyledDescription>
        <StyledSubHeading>How</StyledSubHeading>
        <StyledDescription>
          Partner with trusted sources to buy ration at affordable rates, and filter the candidates to identify deserving families, and
          deliver the ration to their doorstep (if possible)
        </StyledDescription>
        <StyledSubHeading>Eligibility</StyledSubHeading>
        <StyledDescription>Sadaqah and Zakaat are accepted</StyledDescription>
        <StyledSubHeading>Cost</StyledSubHeading>
        <StyledDescription>Cost: Rs 3300 (approx. C$ 30) for a pack of ration covering a family of 7 for 10 days</StyledDescription>
        <StyledSubHeading>Package Contents</StyledSubHeading>
        <StyledDescription>
          A Ration Bag Contains:
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

export default IndexPage;
