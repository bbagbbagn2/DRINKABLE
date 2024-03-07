import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import TeaserHero from "../../components/ui/TeaserHero";
import SkillCard from "../../components/ui/SkillCard";
import main1 from "../../assets/images/main.png";
import Title from "../../components/ui/Title";
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
                Busan, South Korea
                <hr />
              </SkillCard>
              <SkillCard title="Contact" src={main1}>
                010-9207-8758
                <hr />
                pyoungh137@gamil.com
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
                  <SkillCard title="Fron-End" src={main1}>
                    HTML, CSS, JS, TS
                    <hr />
                    React, Next.js, Axios 
                    <hr />
                    styled-components
                    <hr />
                  </SkillCard>
                  <SkillCard title="Back-End" src={main1}>
                    Node.js, Express.js
                    <hr />
                    MySQL
                    <hr />
                  </SkillCard>
                  <SkillCard title="Communication" src={main1}>
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
                    src={main1}
                    showActionLink={true}
                    href="https://github.com/bbagbbagn2"
                  >
                    대학시절부터 현재까지 진행한 프로젝트와 TIL 등 다양한
                    소스코드 저장소입니다.
                  </SkillCard>
                  <SkillCard
                    title="Pjh-Portfolio"
                    src={main1}
                    showActionLink={true}
                    href="https://pjh-portfolio.netlify.app/"
                  >
                    프론트엔드를 학습한 초창기 때 만든 웹 포트폴리오입니다.
                  </SkillCard>
                  <SkillCard title="Communication" src={main1}>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
