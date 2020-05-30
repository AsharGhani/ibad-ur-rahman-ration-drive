import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions, breakpoints } from "../styles/variables";
import { navigate } from "gatsby";
import { getEmSize } from "../styles/mixins";
import { StyledLinkButton } from "../styles/styledComponents";

const colorTheme = themeLight;

const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;
const md = `@media (min-width: ${getEmSize(breakpoints.md)}em)`;

export interface UpdateCardProps {
  title: string;
  link?: string;
  date?: Date;
  description?: string;
  imageSrc?: string;
  imageTitle?: string;
}

const StyledTitleDescriptionContainer = styled.div`
  flex-basis: 300px;
  flex-grow: 1;
`;

const StyledUpdateCardContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: ${getEmSize(breakpoints.lg)}em;
  align-items: flex-start;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
  padding: 24px;
  border-radius: 5px;
  flex-wrap: wrap;

  ${lg} {
    margin: 10px 20px;
    width: calc(100% - 80px);
  }
`;

const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  margin: 0 auto;
  margin-top: 24px;

  ${md} {
    margin-left: 24px;
    margin-top: 0;
  }
`;

const StyledTitle = styled.span`
  padding-bottom: 8px;
  font-size: ${dimensions.headingSizes.h3}rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const StyledDate = styled.div`
  color: ${colorTheme.dates};
  font-size: ${dimensions.headingSizes.h4}rem;
  padding-bottom: 8px;
`;

const StyledDescription = styled.span`
  font-size: ${dimensions.headingSizes.h4};
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  margin-bottom: 20px;

  ${md} {
    -webkit-line-clamp: 5;
  }
`;

const UpdateCard: React.FC<UpdateCardProps> = function(props: UpdateCardProps) {
  const linkClass = props.link ? "link" : "";
  let onClickAttribute;
  if (props.link) {
    onClickAttribute = {
      onClick: () => navigate(props.link!),
    };
  }

  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return (
    <StyledUpdateCardContainer className={linkClass} {...onClickAttribute}>
      <StyledTitleDescriptionContainer>
        <StyledTitle>{props.title}</StyledTitle>
        {props.date && <StyledDate>{props.date.toLocaleDateString(undefined, dateOptions)}</StyledDate>}
        {props.description && <StyledDescription>{props.description}</StyledDescription>}
        {props.link && <StyledLinkButton>View</StyledLinkButton>}
      </StyledTitleDescriptionContainer>
      {props.imageSrc && <StyledImage src={props.imageSrc} title={props.imageTitle} width="300px" height="300px"></StyledImage>}
    </StyledUpdateCardContainer>
  );
};

export default UpdateCard;
