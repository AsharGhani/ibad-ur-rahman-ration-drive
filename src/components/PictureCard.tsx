import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions } from "../styles/variables";
import { navigate } from "gatsby";

const colorTheme = themeLight;

export interface PictureCardProps {
  title: string;
  link?: string;
  description?: string;
  imageSrc?: string;
  imageTitle?: string;
}

const StyledPictureCardContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
`;

const StyledTitle = styled.span`
  padding: 8px 0px;
  font-size: ${dimensions.headingSizes.h2}rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledDescription = styled.span`
  font-size: ${dimensions.headingSizes.h4};
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const StyledProjectLink = styled.div`
  text-align: center;
  background: ${colorTheme.button};
  color: ${colorTheme.buttonText};
  font-size: ${dimensions.fontSize.small}px;
  text-decoration: none;
  padding: 4px 8px;
  width: 120px;
  margin-top: 20px;
  &:focus,
  &:hover {
    background: ${colorTheme.buttonHover};
    text-decoration: none;
  }
`;

const PictureCard: React.FC<PictureCardProps> = function(props: PictureCardProps) {
  const linkClass = props.link ? "link" : "";
  let onClickAttribute;
  if (props.link) {
    onClickAttribute = {
      onClick: () => navigate(props.link!),
    };
  }

  return (
    <StyledPictureCardContainer className={linkClass} {...onClickAttribute}>
      {props.imageSrc && <StyledImage src={props.imageSrc} title={props.imageTitle} width="300px" height="300px"></StyledImage>}
      <StyledTitle>{props.title}</StyledTitle>
      {props.description && <StyledDescription>{props.description}</StyledDescription>}
      {props.link && <StyledProjectLink>View</StyledProjectLink>}
    </StyledPictureCardContainer>
  );
};

export default PictureCard;
