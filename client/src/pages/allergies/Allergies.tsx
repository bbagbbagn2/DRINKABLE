import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import Main from "../../components/ui/Main";
import Title from "../../components/ui/Title";
import ProjectsList from "../../components/ui/ProjectsList";
import ProjectsListItem from "../../components/ui/ProjectListItem";

import icondb from "../../assets/images/projects/icondb logo.png";
import jihun from "../../assets/images/projects/jihun logo.png";
import pjh from '../../assets/images/projects/Pjh-Portfolio logo.png';

import usePageTitle from "../../hooks/usePageTitle";

export default function Projects() {
  usePageTitle({ title: "Projects | JIHUN" });

  return (
    <div className="cmp-container">
      <Header />
      <Main>
        <Title>
          <h1 className="cmp-title__text">Projects</h1>
        </Title>
        <ProjectsList>
          <ProjectsListItem href="/projects/icondb" alt="ICONDB" src={icondb} />
          <ProjectsListItem href="/projects/pjh-portfolio" alt="Pjh-Portfolio" src={pjh} />
          <ProjectsListItem href="/projects/jihun" alt="JIHUN" src={jihun} />
        </ProjectsList>
        <div className="container responsivegrid">
          <div className="cmp-container" />
        </div>
      </Main>
      <Footer />
    </div>
  );
}
