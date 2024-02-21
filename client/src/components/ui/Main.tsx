import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
  margin-inline: 24px;
  width: auto;
  max-width: none;
  flex-grow: 1;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    width: 100%;
    max-width: 1120px;
  }
`;
