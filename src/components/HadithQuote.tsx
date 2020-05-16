import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions, breakpoints } from "../styles/variables";
import { css } from "@emotion/core";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const StyledHidthQuoteContainer = styled.div`
  padding-left: 15px;
  width: 100%;
  padding-right: 15px;
  position: relative;
`;

const StyledQuoteTitle = styled.div`
  font-family: "Rage Italic", "Lucida Bright", serif;
  font-size: ${dimensions.headingSizes.huge1}rem;
  color: ${colorTheme.activeItem};
  padding-right: 15px;
  text-align: center;
  margin-bottom: -20px;
  margin-top: -30px;
  ${lg} {
    font-size: 8rem;
  }
`;

const StyledHugeQuotes = styled.span`
  color: ${colorTheme.activeItem};
  font-size: ${dimensions.headingSizes.huge2}rem;
  font-family: "Rage Italic", "Lucida Bright", serif;
  position: absolute;
`;

const StyledQuoteText = styled.span`
  color: ${colorTheme.regularText};
  font-size: ${dimensions.fontSize.regular}px;
  width: 100%;
  min-width: 300px;
`;

const HadithQuote: React.FC = () => (
  <>
    <StyledQuoteTitle>give</StyledQuoteTitle>
    <StyledHidthQuoteContainer>
      <StyledHugeQuotes
        css={css`
          left: -20px;
          top: -25px;
        `}
      >
        "
      </StyledHugeQuotes>
      <StyledQuoteText>
        {`Messenger of Allah (P.B.U.H) was asked "What charity is greater in reward?"`}
        <br></br>
        {`he said: "The charity you give while you are healthy and greedy, fear poverty, and hope for prosperity"`}
      </StyledQuoteText>
      <StyledHugeQuotes>
        <div
          css={css`
            position: relative;
            left: -15px;
          `}
        >
          "
        </div>
      </StyledHugeQuotes>
    </StyledHidthQuoteContainer>
  </>
);

export default HadithQuote;
