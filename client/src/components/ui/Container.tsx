import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <CmpContainer className='cmp-container'>{children}</CmpContainer>;
}

const CmpContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main.container {
    width: auto;
    flex-grow: 1;
  }

  @media only screen and (min-width: 1200px) {
    main.container {
      width: 100%;
    }  
  }
`;
