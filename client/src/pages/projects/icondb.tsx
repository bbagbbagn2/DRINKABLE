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
import Carousel from "../../components/ui/Carousel";

import icondb from '../../assets/images/projects/icondb logo.png';
import main from "../../assets/images/background.jpg";
import frontend from '../../assets/images/projects/home-images/cards_frontend.png';
import backend from '../../assets/images/projects/home-images/cards_backend.png';
import communication from '../../assets/images/projects/home-images/cards_communication.png';

export default function Icondb() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader src={icondb} alt="ICODB 로고" />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
          </div>
          <DesktopBanner />
          <Carousel />
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">프로젝트 정보</h2>
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p style={{ textAlign: "center" }}>
                    무료로 아이콘을 다운받을 수 있는 웹 서비스로, 해시태그 및
                    소셜 로그인 등 사용자의 편의성을 고려하여 제작했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CampaingnCard
            className="content-on-left"
            title="자세한 ICONDB 정보"
            description="팀원과 함께 개발한 ICONDB 개발 과정을 기록하였습니다."
            src={main}
          >
            <Button buttonText="개발 과정 보기" />
          </CampaingnCard>
          <CampaingnCard
            className="content-on-right"
            title="개발 회고록"
            description="프로젝트 개발 시 발생한 문제점 및 해결 과정, 리패토링을 자세히 나타낸 회고록"
            src={main}
          >
            <Button buttonText="회고록 보기" />
          </CampaingnCard>
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">Skills</h2>
              </Title>
              <div className="container responsivegrid grid three-columns">
                <div className="cmp-container">
                  <SkillCard title="Fron-End" src={frontend}>
                    HTML, CSS, JavaScript
                    <hr />
                    React, styled-components
                    <hr />
                    Axios
                    <hr />
                  </SkillCard>
                  <SkillCard title="Back-End" src={backend}>
                    Node.js, Express.js
                    <hr />
                    MySQL
                    <hr />
                  </SkillCard>
                  <SkillCard title="Communication" src={communication}>
                    Git & GitHub
                    <hr />
                    Notion
                    <hr />
                  </SkillCard>
                </div>
              </div>
            </div>
          </div>
          <GitHubCard
            text="ICONDB"
            href="https://github.com/stack0801/Icon_DB"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}