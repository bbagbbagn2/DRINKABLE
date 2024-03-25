import React, { ReactNode } from "react";
import styled from "styled-components";

type InnerContainerProps = {
  children: ReactNode;
};

export default function InnerContainer({ children }: InnerContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
