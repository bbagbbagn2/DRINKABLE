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
import main from "../../assets/images/projects/home-images/pjh-portfolio/desktop.png";
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
                <h2 className="cmp-title__text">PJH-Portfolio</h2>
              </Title>
              <div className="publicationDate">
                <p className="cmp-publication-date">
                  2023.06 - 2023.07 / 2023.11 - 2023.12
                </p>
              </div>
              <Text>
                <p>
                  PJH-Portfolio는 React를 이용하여 제작한 웹 포트폴리오입니다.
                  React를 이용해 스스로 개인 프로젝트를 직접 제작하고 싶다는
                  목표를 가지고 개발에 임했습니다.
                </p>
              </Text>
              <Title>
                <h2 className="cmp-title__text">프로젝트 개요</h2>
              </Title>
              <Text>
                <p>
                  PJH-Portfolio는 혼자서 개발을 진행했습니다. 사용된 기술 스택은
                  아래와 같습니다.
                </p>
              </Text>
              <div className="container responsivegrid grid three-columns">
                <div className="cmp-container">
                  <SkillCard title="Front-End" showImage={false}>
                    HTML5, CSS3
                    <hr />
                    JavaScript
                    <hr />
                    TypeScript
                    <hr />
                    React, styled-components
                    <hr />
                  </SkillCard>
                  <SkillCard title="DevOps" showImage={false}>
                    Netlify
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
                  PJH-Portfolio는 메인 페이지, 프로젝트 페이지, 각 프로젝트의
                  상세 정보 페이지로 구성되었습니다. 또한, Header를 통해 빠른 창
                  이동을 할 수 있도록 설정했고, Footer를 통해 서비스 정보를 한
                  눈으로 볼 수 있도록 개발했습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>디자인 수정 및 코드 수정</b>
                  <br />
                  PJH-Portfolio는 2023.04 - 2023.06 동안 1차 개발을 했지만
                  완성도가 미흡하다고 판단하여 2023.10 - 2023.12 동안 디자인 및
                  전체적인 코드 수정을 가했습니다.
                </p>
              </Text>
              <Title>
                <h2 className="cmp-title__text">코드 최적화</h2>
              </Title>
              <Text>
                <p>
                  <b>1. useLocation을 통한 코드 가독성 향상</b>
                  <br />
                  개발 진행 과정에서 코드 양이 증가하면서 스타일링에 대한 처리도
                  복잡해졌습니다. 이를 해결하기 위해 URL 경로에 따라 스타일이
                  동적으로 변경되도록 useLocation을 활용했습니다. 이렇게 하면
                  기존에는 Header, Footer와 같이 두 개의 파일에 스타일이
                  분산되어 있던 것을 하나의 파일에 통합하여 처리할 수
                  있었습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>2. 공통 컴포넌트화</b>
                  <br />
                  다양한 페이지를 개발하면서 같은 기능을 하는 중복 컴포넌트로
                  인해 코드의 양이 길어지고, 가독성이 감소하는 문제를 해결하기
                  위해 공통 컴포넌트화를 진행하였습니다.
                </p>
              </Text>
            </div>
          </div>

          <div className="container responsivegrid">
            <div className="cmp-container">
              <div className="text">
                <div className="cmp-text">
                  <p>
                    <br />
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
