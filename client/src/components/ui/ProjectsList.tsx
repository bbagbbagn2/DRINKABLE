import React, { ReactNode } from "react";
import "../../styles/ProjectsList.css";
import styled from "styled-components";

interface ProjectsListProps {
  children: ReactNode;
}

export default function ProjectsList({ children }: ProjectsListProps) {
  return (
    <Container>
      <Wrapper>
        <Container>
          <ImageWrapper>{children}</ImageWrapper></Container>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const Wrapper = styled.div`
  min-width: auto;
  padding: 0;
  width: auto;
  margin-inline: auto;

  @media only screen and (min-width: 1200px) {
    width: 75%;
  }
`;

const ImageWrapper = styled.div`
  margin: 0;
  width: 100%;
  margin-inline: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
