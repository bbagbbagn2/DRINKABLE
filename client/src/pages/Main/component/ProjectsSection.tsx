import React from "react";

import MainContainer from "../../../components/ui/Main";
import ProjectsList from "../../../components/ui/ProjectsList";
import ProjectsListItem from "../../../components/ui/ProjectListItem";
import Title from "../../../components/ui/Title";

import icondb from "../../../assets/images/projects/icondb logo.png";
import jihun from '../../../assets/images/projects/jihun-logo.png';
import pjh from '../../../assets/images/projects/Pjh-Portfolio logo.png';

export default function ProjectsSection() {
  return (
    <MainContainer>
      <Title><h1 className="cmp-title__text">프로젝트 보기</h1></Title>
      <ProjectsList>
        <ProjectsListItem href="/projects/icondb" alt="ICONDB" src={icondb} />
        <ProjectsListItem href="/projects/icondb" alt="Pjh-Portfolio" src={pjh} />
        <ProjectsListItem href="/projects/icondb" alt="JIHUN" src={jihun} />
      </ProjectsList>
      <div className="button button--secondary">
        <a href="/projects" className="cmp-button">
          <span className="cmp-button__text">모두 보기</span>
        </a>
      </div>
    </MainContainer>
  );
}
