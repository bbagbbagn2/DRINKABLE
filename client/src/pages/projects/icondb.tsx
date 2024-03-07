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

import icondb from "../../assets/images/projects/icondb logo.png";
import icondb1 from "../../assets/images/icondb/icondb-main-1.png";
import icondb2 from "../../assets/images/icondb/icondb-main-2.png";
import frontend from "../../assets/images/projects/home-images/cards_frontend.png";
import backend from "../../assets/images/projects/home-images/cards_backend.png";
import communication from "../../assets/images/projects/home-images/cards_communication.png";
import Desktop from "../../assets/images/projects/home-images/icondb/desktop.png";

export default function Icondb() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader src={icondb} alt="ICODB 로고" />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
            <DesktopBanner src={Desktop} alt="ICONDB 배너" />
          </div>

          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">About ICONDB</h2>
              </Title>
              <div className="publicationDate">
                <p className="cmp-publication-date">2022.03 - 2022.06</p>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    평소 대학 과제 발표 시 제작하는 PPT에 사용되는 아이콘을
                    찾으면서 기존 아이콘 다운로드 사이트는 과도한 광고 및
                    유료화로 인해 접근이 힘들었습니다.&nbsp; 또한, 아이콘
                    이미지의 색상 및 모양 등 제가 사용하는 목적에 완벽히
                    부합하는 아이콘을 찾는 것에 어려움이 있었습니다.&nbsp;
                    이러한 문제점들을 개선하기 위해 웹사이트 내에서 아이콘을
                    수정할 수 있는 ICONDB 웹서비스를 팀원들과
                    개발했습니다.&nbsp; 개발을 진행한 팀원은 총 3명이며, 저는
                    FE개발 및 웹 디자인 역할을 수행하였습니다.
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
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">Key Features</h2>
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    사용자 관련 기능으로 로그인 및 회원가입 기능을 추가했으며, 
                    사용자의 편의성을 고려하여 소셜 로그인 기능도 추가했습니다.&nbsp;
                    또한 제목 및 사용자를 통한 검색 엔진을 도입하고, 
                    이후 해시태그를 이용한 검색 기능을 추가했습니다.&nbsp;
                    좋아요 기능을 도입하여 위시리스트를 만들었고,
                    사용자 간의 팔로우 기능을 추가하여 사용자의 아이콘을 쉽게 찾을 수 있도록 했습니다.&nbsp;
                    또한 프로필 페이지를 개발하여 사용자가 자신의 닉네임과 프로필 사진을 설정할 수 있도록 했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CampaingnCard
            className="content-on-left"
            title="자세한 ICONDB 정보"
            description="팀원과 함께 개발한 ICONDB 개발 과정을 기록하였습니다."
            src={icondb1}
          >
            <Button buttonText="개발 과정 보기" />
          </CampaingnCard>
          <CampaingnCard
            className="content-on-right"
            title="개발 회고록"
            description="프로젝트 개발 시 발생한 문제점 및 해결 과정, 리패토링을 회고록에 작성했습니다."
            src={icondb2}
          >
            <Button buttonText="회고록 보기" />
          </CampaingnCard>

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
