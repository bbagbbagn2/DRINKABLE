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
import banner from "../../assets/images/projects/home-images/pjh-portfolio/portfolio.png";

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
                  <p>PJH-Portfolio는 React로 제작한 웹 포트폴리오입니다.</p>
                </div>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    팀 프로젝트가 아닌, 개인 프로젝트였기 때문에 프로젝트
                    디자인, 설계 개발을 혼자서 하는 경험을 얻었습니다.
                  </p>
                </div>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    PJH-Portfolio는 메인 페이지, 프로젝트 페이지, 각 프로젝트의
                    상세 정보 페이지로 구성되었습니다.
                    <br />
                    Header를 통해 빠른 창 이동을 할 수 있도록 설정했고, Footer를
                    통해 서비스 정보를 한 눈으로 볼 수 있도록 개발했습니다.
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
                  <SkillCard title="Front-End" showImage={false}>
                    HTML / CSS
                    <hr />
                    JavaScript
                    <hr />
                    TypeScript
                    <hr />
                    React / styled-components
                    <hr />
                  </SkillCard>
                  <SkillCard title="Tools" showImage={false}>
                    Git & GitHub
                    <hr />
                    Notion
                    <hr />
                    Netlify
                    <hr />
                  </SkillCard>
                </div>
              </div>
              <Title>
                <h2 className="cmp-title__text" />
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    PJH-Portfolio는 2023.04 - 2023.06 동안 1차 개발을 했고,
                    2023.10 - 2023.12 동안 전체적인 수정을 가했습니다.
                    <br />
                    개발 진행 중 스타일 코드가 방대해져 이를 해결하기 위해
                    useLocation을 활용해 URL 경로를 달리 할 때마다 스타일이
                    달라지도록 개발했습니다. 이를 통해 Header, Footer의 스타일
                    변경을 쉽게 할 수 있었습니다.
                  </p>
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
