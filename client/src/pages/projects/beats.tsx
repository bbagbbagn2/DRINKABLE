import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import Button from "../../components/ui/Button";
import SecondaryHeader from "../../components/ui/SecondaryHeader";
import DesktopBanner from "../../components/ui/DesktopBanner";
import GitHubCard from "../../components/ui/GitHubCard";
import CampaingnCard from "../../components/ui/CampaignCard";
import SkillCard from "../../components/ui/SkillCard";
import Title from "../../components/ui/Title";
import Text from "../../components/ui/Text";

import portfolio from "../../assets/images/projects/Pjh-Portfolio logo.png";
import main from "../../assets/images/portfolio/portfolio-main-2.png";
import banner from "../../assets/images/projects/home-images/beats/beats.png";

export default function Beats() {
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
                <h2 className="cmp-title__text">beats Main</h2>
              </Title>
              <div className="publicationDate">
                <p className="cmp-publication-date">2023.06 - 2023.07</p>
              </div>
              <Text>
                <p>
                  beats Main는 기존에 있는 Beats 제품들을 소개하는 메인
                  페이지입니다. React 및 styled-components를 이용해 반응형 웹 페이지의
                  레이아웃 및 구조를 학습하는 목표를 가지고 개발에 임했습니다.
                </p>
              </Text>
              <Title>
                <h2 className="cmp-title__text">프로젝트 개요</h2>
              </Title>
              <Text>
                <p>
                  beats Main은 혼자서 개발을 진행했습니다. 사용된 기술 스택은
                  아래와 같습니다.
                </p>
              </Text>
              <div className="container responsivegrid grid two-columns">
                <div className="cmp-container">
                  <SkillCard title="Front-End" showImage={false}>
                    React, styled-components
                    <hr />
                    JavaScript
                    <hr />
                  </SkillCard>
                  <SkillCard title="Tools" showImage={false}>
                    VSCode
                    <hr />
                    Git, GitHub
                    <hr />
                  </SkillCard>
                </div>
              </div>
              <Title>
                <h2 className="cmp-title__text">프로젝트 기능 개발</h2>
              </Title>
              <Text>
                <p>
                  <b>프로젝트 구성</b>
                  <br />
                  Beats Main은 제품 추천, 신제품 소개, 제품 목록, 회원 가입 섹션으로 구성되어 있습니다. 또한, Header를 통해 빠른 창
                  이동을 할 수 있도록 설정했고, Footer를 통해 서비스 정보를 한
                  눈으로 볼 수 있도록 개발했습니다.
                </p>
              </Text>
              <Title>
                <h2 className="cmp-title__text">코드 최적화</h2>
              </Title>
              <Text>
                <p>
                  <b>1. 공통 컴포넌트화</b>
                  <br />
                  다양한 페이지를 개발하면서 같은 기능을 하는 중복 컴포넌트로
                  인해 코드의 양이 길어지고, 가독성이 감소하는 문제를 해결하기
                  위해 공통 컴포넌트화를 진행하였습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>2. 스타일링 구조 변경</b>
                  <br />
                  CSS 스타일링 진행 시 flex와 grid의 차이점을 파악하여 상황에 맞는 레이아웃을 사용했습니다.
                </p>
              </Text>
            </div>
          </div>
          <GitHubCard
            text="beats Main"
            href="https://github.com/bbagbbagn2/JH-Portfolio"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
