import React, { ReactNode } from "react";
import styled from "styled-components";

type MainProps = {
  children: ReactNode;
};

export default function MainConatiner({ children }: MainProps) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  flex-grow: 1;
  width: auto;
  margin-inline: 24px;
  max-width: none;

  @media only screen and (min-width: 1200px) {
    width: 100%;
    margin-inline: auto;
    max-width: 1120px;
  }
`;
