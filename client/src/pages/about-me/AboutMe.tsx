import React from "react";

import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import InnerContainer from "../../components/ui/InnerContainer";
import MainConatiner from "../../components/ui/Main";
import TeaserHero from "../../components/ui/TeaserHero";
import {
  GridTwoContainer,
  GridThreeContainer,
} from "../../components/ui/GridContainer";
import ContentCard from "../../components/ui/ContentCard";
import SkillCard from "../../components/ui/SkillCard";
import main1 from "../../assets/images/main.png";
import Title from "../../components/ui/TitleContainer";
import Text from "../../components/ui/TextContainer";
import github from "../../assets/images/about-me/aboutme github.png";
import portfolio from "../../assets/images/about-me/aboutme pjh-portfolio.png";

export default function BannerSection() {
  return (
    <InnerContainer>
      <Header />
      <MainConatiner>
        <TeaserHero src={main1}>About Me</TeaserHero>

        <div>
          <Title>
            <h1>프론트엔드 개발자 박지훈입니다.</h1>
          </Title>
          <Text>
            <p style={{ textAlign: "center" }}>
              <b>
                프론트엔드 개발자 박지훈입니다. 저는 React 뿐만 아니라
                styled-components, Next.js 등 개인 및 팀 프로젝트를 통해 다양한
                기술을 사용한 경험이 있습니다. 또한, 코드의 가독성과 유지보수를
                높이기 위한 리팩토링을 꾸준히 하고 있습니다. 조금씩이라도 코드를
                효율적으로 수정하고, 리팩토링을 꾸준히 함으로써 제가 프로젝트에
                임하는 자세와 저의 성실함을 나타낼 수 있습니다.
              </b>
            </p>
          </Text>
          <GridTwoContainer>
            <ContentCard title="Profile" showImage={false}>
              박지훈
              <hr />
              1999.01.13
              <hr />
              부산광역시 연제구
              <hr />
            </ContentCard>
            <ContentCard title="Contact" showImage={false}>
              pyoungh137@gamil.com
              <hr />
              010-9207-8758
              <hr />
            </ContentCard>
          </GridTwoContainer>
        </div>
        <div>
          <Title>
            <h1 className="cmp-title__text">Skills</h1>
          </Title>
          <GridThreeContainer>
            <SkillCard title="Fron-End" showImage={false}>
              다양한 프로젝트에서 프론트엔드 개발 시에 자주 사용했던 기술입니다.
              <br />
              <br />
              HTML, CSS, JS, TS
              <hr />
              React, styled-components
              <hr />
              Axios
              <hr />
            </SkillCard>
            <SkillCard title="Back-End" showImage={false}>
              팀 프로젝트 개발 시 사용한 백엔드 기술입니다.
              <br />
              <br />
              Node.js
              <hr />
              Express.js
              <hr />
              MySQL
              <hr />
            </SkillCard>
            <SkillCard title="Tools" showImage={false}>
              개발 중 코드 관리 및 팀원 일정 관리에 사용한 도구입니다
              <br />
              <br />
              Git
              <hr />
              GitHub
              <hr />
              Notion
              <hr />
            </SkillCard>
          </GridThreeContainer>
        </div>
        <div>
          <Title>
            <h1>Links</h1>
          </Title>
          <GridThreeContainer>
            <ContentCard
              title="GitHub"
              src={github}
              showActionLink={true}
              href="https://github.com/bbagbbagn2"
            >
              대학시절부터 현재까지 진행한 프로젝트와 TIL 등 다양한 소스코드
              저장소입니다.
            </ContentCard>
            <SkillCard
              title="PJH-Portfolio"
              src={portfolio}
              showActionLink={true}
              href="https://pjh-portfolio.netlify.app/"
            >
              프론트엔드를 학습한 초창기 때 만든 웹 포트폴리오입니다.
            </SkillCard>
          </GridThreeContainer>
        </div>
      </MainConatiner>
      <Footer />
    </InnerContainer>
  );
}
