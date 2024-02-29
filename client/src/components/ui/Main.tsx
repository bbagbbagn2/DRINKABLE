import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return <MainContainer className='container responsivegrid'>{children}</MainContainer>;
}

const MainContainer = styled.main`
  margin-inline: 24px;
  max-width: none;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    max-width: 1120px;
  }
`;
