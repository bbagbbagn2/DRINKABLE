import React, { ReactNode } from "react";
import styled from "styled-components";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <MainContainer className="container responsivegrid">
      <div className="cmp-container">{children}</div>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  &.container {
    margin-inline: 24px;
    max-width: none;
  }

  @media only screen and (min-width: 1200px) {
    &.container {
      margin-inline: auto;
      max-width: 1120px;
    }
  }
`;
