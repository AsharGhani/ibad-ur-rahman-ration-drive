import IndexLayout from "../layouts";
import Page from "../components/Page";
import Container from "../components/Container";
import styled from "@emotion/styled";

const StyledSubHeading = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h3>For questions and donations</h3>
        <StyledSubHeading>Email: </StyledSubHeading>
        <a href="mailto:Ibaad.ur.rahman.kanata@gmail.com">Ibaad.ur.rahman.kanata@gmail.com</a>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
