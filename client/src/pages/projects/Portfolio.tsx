import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Title from "../../components/ui/Title";

import Button from "../../components/ui/Button";
import SecondaryHeader from "../../components/ui/SecondaryHeader";
import DesktopBanner from "../../components/ui/DesktopBanner";
import GitHubCard from "../../components/ui/GitHubCard";
import CampaingnCard from "../../components/ui/CampaignCard";
import SkillCard from "../../components/ui/SkillCard";

import portfolio from "../../assets/images/projects/Pjh-Portfolio logo.png";
import main from "../../assets/images/background.jpg";
import frontend from "../../assets/images/projects/home-images/cards_frontend.png";
import devops from "../../assets/images/projects/home-images/cards_backend.png";
import banner from "../../assets/images/projects/home-images/pjh-portfolio/desktop2.png";

export default function Portfolio() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader src={portfolio} alt="PJH-Portfolio 로고" />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
          </div>
          <DesktopBanner src={banner} alt="Pjh-Portfolio 배너" />
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">About PJH-Portfolio</h2>
              </Title>
              <div className="publicationDate">
                <p className="cmp-publication-date">
                  2023.06 - 2023.07 / 2023.11 - 2023.12
                </p>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    졸업 후, 프론트엔드 개발자로의 전환을 위해 React 및 다양한
                    프론트엔드 기술에 대한 공부를 시작했습니다.&nbsp;이를 통해
                    저의 개발 실력을 확인하고자 웹 포트폴리오를
                    개발했습니다.&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">Skills</h2>
              </Title>
              <div className="container responsivegrid grid two-columns">
                <div className="cmp-container">
                  <SkillCard title="Fron-End" src={frontend}>
                    HTML, CSS
                    <hr />
                    JavaScript, TypeScript
                    <hr />
                    React, styled-components
                    <hr />
                  </SkillCard>
                  <SkillCard title="DevOps" src={devops}>
                    Git & GitHub
                    <hr />
                    Notion
                    <hr />
                    Netlify
                    <hr />
                  </SkillCard>
                </div>
              </div>
              <div className="container responsivegrid">
                <div className="cmp-container">
                  <Title>
                    <h2 className="cmp-title__text">Key Features</h2>
                  </Title>
                  <div className="text">
                    <div className="cmp-text">
                      <p>
                        웹 포트폴리오는 간단한 자기소개 및 슬로건, 개발
                        프로젝트, 이력서, 연락처로 구성되어 있습니다.&nbsp; 개발
                        진행 중 스타일 코드가 방대해져 이를 해결하기 위해
                        useLocation을 활용해 URL 경로를 달리 할 때마다 스타일이
                        달라지도록 개발했습니다.&nbsp;이를 통해 Header, Footer의
                        스타일 변경을 쉽게 할 수 있었습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CampaingnCard
            className="content-on-left"
            title="개발 회고록"
            description="PJH-Portfolio를 개발하면서 발생한 문제점과 해결 과정을 회고록에 작성했습니다."
            src={main}
          >
            <Button buttonText="회고록 보기" />
          </CampaingnCard>
          
          <GitHubCard
            text="PJH-Portfolio"
            href="https://github.com/bbagbbagn2/JH-Portfolio"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
