import React from "react";

import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

import Main from "../../components/ui/Main";
import TitleContainer from "../../components/ui/TitleContainer";
import ProjectsList from "../../components/ui/ProjectsList";
import ProjectsListItem from "../../components/ui/AdativeImage";

import icondb from "../../assets/images/projects/icondb logo.png";
import jihun from "../../assets/images/projects/jihun logo.png";
import pjh from '../../assets/images/projects/Pjh-Portfolio logo.png';

import usePageTitle from "../../hooks/usePageTitle";
import styled from "styled-components";

export default function Projects() {
  usePageTitle({ title: "Projects | JIHUN" });

  return (
    <div className="cmp-container">
      <Header />
      <Main>
        <TitleContainer>
          <Title>Projects</Title>
        </TitleContainer>
        <ProjectsList>
          <ProjectsListItem href="/projects/jihun" alt="JIHUN" src={jihun} />
          <ProjectsListItem href="/projects/pjh-portfolio" alt="Pjh-Portfolio" src={pjh} />
          <ProjectsListItem href="/projects/icondb" alt="ICONDB" src={icondb} />
        </ProjectsList>
        <div className="container responsivegrid">
          <div className="cmp-container" />
        </div>
      </Main>
      <Footer />
    </div>
  );
}

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 56px;
  text-align: center;
  
  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;