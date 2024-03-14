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
                    평소 대학 과제 발표 시 제작하는 PPT에 사용되는 아이콘을
                    찾으면서 기존 아이콘 다운로드 사이트는 과도한 광고 및
                    유료화로 인해 접근이 힘들었습니다.&nbsp; 또한, 아이콘
                    이미지의 색상 및 모양 등 제가 사용하는 목적에 완벽히
                    부합하는 아이콘을 찾는 것에 어려움이 있었습니다.&nbsp;
                    이러한 문제점들을 개선하기 위해 웹사이트 내에서 아이콘을
                    직접 변경, 수정할 수 있는 웹서비스를 팀원들과
                    개발했습니다.&nbsp; 개발 구성원은 프론트엔드 개발자 1명,
                    백엔드 개발자 2명으로 구성되어 있습니다.
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
                <h2 className="cmp-title__text">Key Features</h2>
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p>
                    사용자 관련 기능으로 로그인 및 회원가입 기능을 개발했고,
                    사용자의 편의성을 고려해 소셜 로그인 기능 또한
                    추가했습니다.&nbsp; 제목 및 사용자, 해시태그를 이용한 다양한
                    필터로 검색이 가능합니다.&nbsp; 좋아요 를 눌러 자신만의
                    위시리스트를 만들어 좋아요를 누른 아이콘을 한번에 볼 수
                    있습니다.&nbsp; 사용자 간 팔로우를 통해 팔로우한 사용자의
                    아이콘을 쉽게 찾을 수 있습니다.&nbsp; 프로필 페이지에서
                    사용자의 닉네임과 프로필 사진을 설정할 수 있습니다.
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
