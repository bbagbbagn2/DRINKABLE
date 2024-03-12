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

import jihun from "../../assets/images/projects/jihun logo.png";
import main from "../../assets/images/background.jpg";
import frontend from "../../assets/images/projects/home-images/cards_frontend.png";
import devops from "../../assets/images/projects/home-images/cards_backend.png";

export default function Portfolio() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader src={jihun} alt="JIHUN 로고" />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
          </div>
          <DesktopBanner src={main} alt="ICONDB 배너" />
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">프로젝트 정보</h2>
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p style={{ textAlign: "center" }}>
                    웹 포트폴리오를 목적으로 제작한 웹사이트입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CampaingnCard
            className="content-on-left"
            title="개발 회고록"
            description="JIHUN 웹사이트를 개발하면서 발생한 문제점과 해결 과정을 나타낸 회고록"
            src={main}
          >
            <Button buttonText="개발 과정 보기" />
          </CampaingnCard>
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">Skills</h2>
              </Title>
              <div className="container responsivegrid grid three-columns">
                <div className="cmp-container">
                  <SkillCard title="Fron-End" showImage={false}>
                    HTML, CSS
                    <hr />
                    JavaScript, TypeScript
                    <hr />
                    React, styled-components
                    <hr />
                  </SkillCard>
                  <div />
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
            </div>
          </div>
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
