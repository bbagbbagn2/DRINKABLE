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
import banner from "../../assets/images/projects/home-images/icondb/icondb.png";

export default function Icondb() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader src={icondb} alt="ICODB 로고" />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
            <DesktopBanner src={banner} alt="ICONDB 배너" />
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
                    ICONDB는 무료로 아이콘을 다운로드할 수 있는 웹
                    서비스입니다.&nbsp;저희는 기존 아이콘 다운로드 사이트의
                    불편한 점을 찾고 이를 개선하여 사용자에게 더 편리한 웹
                    서비스를 만들고 싶었습니다.&nbsp;사용자의 목적에 완전히
                    일치하는 아이콘을 만들기 위해 기존의 사이트와는 다르게 ICODB
                    내에서 직접 수정할 수 있도록 했습니다.
                  </p>
                </div>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    프로젝트를 진행하면서 프론트엔드 개발자의 역할 뿐만
                    아니라 페이지 디자인, 팀원의 일정 관리 등 설계부터 개발 및
                    배포까지 다양한 경험을 쌓을 수 있었습니다.
                  </p>
                </div>
              </div>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    저는 프론트엔드 개발자로서 다양한 기능을 개발했습니다.
                    <br />
                    사용자 관련 페이지에서 로그인 및 회원가입 기능을 개발했고,
                    후에 사용자의 편의성을 고려해 소셜 로그인 기능을
                    추가했습니다. 프로필 페이지에서는 사용자만의 닉네임과 프로필
                    사진을 추가할 수 있도록 설정했습니다.
                    <br />
                    그리고 아이콘 검색 시 제목 및 사용자, 해시태그 등 다양한
                    필터를 사용해 원하는 아이콘을 찾을 수 있도록 했습니다.
                    <br />
                    아이콘 상세 페이지에 좋아요 기능을 추가해 자신만의
                    위시리스트를 만들어 좋아요를 누른 아이콘을 한번에 볼 수
                    있도록 했습니다. 또한, 팔로우 기능을 추가해 팔로우한
                    사용자의 아이콘을 쉽게 찾을 수 있습니다.
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
                  <SkillCard title="Front-End" showImage={false}>
                    HTML / CSS
                    <hr />
                    JavaScript
                    <hr />
                    React / styled-components
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
                    AWS
                    <hr />
                  </SkillCard>
                  <SkillCard title="Tools" showImage={false}>
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
                <h2 className="cmp-title__text" />
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    대학교 졸업작품을 위해 약 3개월 동안 개발한 ICONDB를 통해 많은 경험을 했습니다. 
                    <br />위 프로젝트를 진행하면서 React와 styled-components를
                    학습할 수 있었고, 이를 통해 기존에 사용했던 HTML / CSS를
                    React로 전환할 수 있었습니다. 또한, 첫 프론트엔드 프로젝트이다
                    보니 많은 기술적 문제에 직면하며 시행착오도 있었지만, 위 문제를 하나씩 해결하면서 제 개발 지식을
                    향상시킬 수 있었습니다.
                    <br />
                    기술적 지식 뿐만 아니라, 팀원과의 협업 시 발생한 의사소통
                    문제에서도 많은 개선점을 확인할 수 있었습니다. Notion을
                    사용한 일정 관리로 프로젝트 완성 기간을 차질없이 맞출 수 있었고, 정기
                    회의 시 회의록을 작성 해 꾸준한 개발 완성도를 유지할 수
                    있었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <CampaingnCard
            className="content-on-left"
            title="ICONDB Information"
            description="팀원과 함께 개발한 ICONDB 개발 과정을 기록하였습니다."
            src={icondb1}
          >
            <Button buttonText="개발 과정 보기" />
          </CampaingnCard>
          <CampaingnCard
            className="content-on-right"
            title="ICONDB 개발 회고록"
            description="프로젝트 개발 시 발생한 기능적 문제 및 해결 과정, 리패토링을 회고록에 작성했습니다."
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
