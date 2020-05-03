import * as React from "react";
import styled from "@emotion/styled";

import { dimensions } from "../styles/variables";
import "../styles/page.scss";

const StyledPage = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
