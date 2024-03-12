import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import TeaserHero from "../../components/ui/TeaserHero";
import SkillCard from "../../components/ui/SkillCard";
import main1 from "../../assets/images/main.png";
import Title from "../../components/ui/Title";
import Text from "../../components/ui/Text";
import github from "../../assets/images/about-me/aboutme github.png";
import portfolio from "../../assets/images/about-me/aboutme pjh-portfolio.png";

export default function BannerSection() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <TeaserHero src={main1}>ABOUT ME</TeaserHero>
          <Title>
            <h1 className="cmp-title__text">Welcome to JIHUN</h1>
          </Title>
          <Text>
            <p style={{ textAlign: "center" }}>
              <b>
                프론트엔드 개발자 박지훈입니다.&nbsp;저는 React 뿐만 아니라
                styled-components, Next.js 등 개인 및 팀 프로젝트를 통해 다양한
                기술을 사용한 경험이 있습니다.&nbsp;또한, 코드의 가독성과
                유지보수를 높이기 위한 리팩토링을 꾸준히 하고 있습니다.&nbsp;
                조금씩이라도 코드를 효율적으로 수정하고, 리팩토링을 꾸준히
                함으로써 제가 프로젝트에 임하는 자세와 저의 성실함을 나타낼 수
                있습니다.
              </b>
            </p>
          </Text>
          <TeaserHero className="hero--normal content-on-top content-on-left">
            
          </TeaserHero>
          <Title>
            <h1 className="cmp-title__text">Profile</h1>
          </Title>
          <div className="container responsivegrid grid two-columns">
            <div className="cmp-container">
              <SkillCard title="Profile" src={main1}>
                박지훈
                <hr />
                1999.01.13
                <hr />
                부산광역시
                <hr />
              </SkillCard>
              <SkillCard title="Contact" src={main1}>
                pyoungh137@gamil.com
                <hr />
                010-9207-8758
                <hr />
              </SkillCard>
            </div>
          </div>
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h1 className="cmp-title__text">Skills</h1>
              </Title>
              <div className="container responsivegrid grid three-columns">
                <div className="cmp-container">
                  <SkillCard title="Fron-End" showImage={false}>
                    다양한 프로젝트에서 프론트엔드 개발 시에 자주 사용했던 기술입니다.
                    <br/><br/>
                    HTML, CSS, JS, TS
                    <hr />
                    React, styled-components
                    <hr />
                    Axios
                    <hr />
                  </SkillCard>
                  <SkillCard title="Back-End" showImage={false}>
                    Node.js
                    <hr />
                    Express.js
                    <hr />
                    MySQL
                    <hr />
                  </SkillCard>
                  <SkillCard
                    title="Tools"
                    showImage={false}
                  >
                    Git
                    <hr />
                    GitHub
                    <hr />
                    Notion
                    <hr />
                  </SkillCard>
                </div>
              </div>
            </div>
            <div className="cmp-container">
              <Title>
                <h1 className="cmp-title__text">Links</h1>
              </Title>
              <div className="container responsivegrid grid three-columns">
                <div className="cmp-container">
                  <SkillCard
                    title="GitHub"
                    src={github}
                    showActionLink={true}
                    href="https://github.com/bbagbbagn2"
                  >
                    대학시절부터 현재까지 진행한 프로젝트와 TIL 등 다양한
                    소스코드 저장소입니다.
                  </SkillCard>
                  <SkillCard
                    title="Pjh-Portfolio"
                    src={portfolio}
                    showActionLink={true}
                    href="https://pjh-portfolio.netlify.app/"
                  >
                    프론트엔드를 학습한 초창기 때 만든 웹 포트폴리오입니다.
                  </SkillCard>
                  <SkillCard title="Resume" src={main1} showActionLink={true}>
                    Notion을 활용하여 제작한 이력서입니다.
                  </SkillCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
