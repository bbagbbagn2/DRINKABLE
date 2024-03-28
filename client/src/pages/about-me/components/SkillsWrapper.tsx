import React from "react";
import { GridThreeContainer } from "../../../components/ui/GridContainer";
import ContentCard from "../../../components/ui/ContentCard";
import Title from "../../../components/ui/TitleContainer";
import { AboutmeSkillsData } from "../../../data/data";

export default function SkillsWrapper() {
  return (
    <div>
      <Title>
        <h1>Skills</h1>
      </Title>
      <GridThreeContainer>
        <ContentCard title="Fron-End" showImage={false}>
          다양한 프로젝트에서 프론트엔드 개발 시에 자주 사용했던 기술입니다.
          <br />
          <br />
          HTML, CSS, JS, TS
          <hr />
          React, styled-components
          <hr />
          Axios
          <hr />
        </ContentCard>
        <ContentCard title="Back-End" showImage={false}>
          팀 프로젝트 개발 시 사용한 백엔드 기술입니다.
          <br />
          <br />
          Node.js
          <hr />
          Express.js
          <hr />
          MySQL
          <hr />
        </ContentCard>
        <ContentCard title="Tools" showImage={false}>
          개발 중 코드 관리 및 팀원 일정 관리에 사용한 도구입니다
          <br />
          <br />
          Git
          <hr />
          GitHub
          <hr />
          Notion
          <hr />
        </ContentCard>
      </GridThreeContainer>
    </div>
  );
}
