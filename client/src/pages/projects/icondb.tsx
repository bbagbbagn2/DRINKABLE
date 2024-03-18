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
                <h2 className="cmp-title__text">ICONDB</h2>
              </Title>
              <div className="publicationDate">
                <p className="cmp-publication-date">2022.03 - 2022.06</p>
              </div>
              <Text>
                <p>
                  ICONDB는 무료로 아이콘을 다운로드할 수 있는 웹
                  서비스입니다.&nbsp;저희는 기존 아이콘 다운로드 사이트의 불편한
                  점을 찾고 이를 개선하여 사용자에게 더 편리한 웹 서비스를
                  만들고 싶었습니다.&nbsp;기존 아이콘 다운로드 웹사이트들과
                  마찬가지로 좋아요를 표시 해 사용자의 위시리스트를 만들고,
                  팔로우를 통해 사용자의 아이콘을 한 눈에 볼 수 있도록
                  계획했습니다. 기존 웹사이트와의 차별점으로 ICONDB는 사용자의
                  목적에 완전히 일치하는 아이콘을 만들기 위해 사이트 내에서
                  아이콘을 직접 수정할 수있도록 계획했습니다.
                </p>
              </Text>
              <Title>
                <h2 className="cmp-title__text">프로젝트 개요</h2>
              </Title>
              <Text>
                <p>
                  ICONDB는 프론트엔드 1명, 백엔드 1명, 풀스택 1명으로 구성되어
                  개발을 진행했습니다. 프로젝트에 사용된 기술 스택은 아래와
                  같습니다.
                </p>
              </Text>
              <div className="container responsivegrid">
                <div className="cmp-container">
                  <div className="container responsivegrid grid three-columns">
                    <div className="cmp-container">
                      <SkillCard title="Front-End" showImage={false}>
                        HTML5, CSS3
                        <hr />
                        JavaScript
                        <hr />
                        React, styled-components
                        <hr />
                        Axios
                        <hr />
                      </SkillCard>
                      <SkillCard title="Back-End" showImage={false}>
                        Node.js
                        <hr />
                        Express
                        <hr />
                        MySQL
                        <hr />
                      </SkillCard>
                      <SkillCard title="Tools" showImage={false}>
                        VSCode
                        <hr />
                        Git, GitHub
                        <hr />
                        Notion
                        <hr />
                      </SkillCard>
                    </div>
                  </div>
                  <Title>
                    <h2 className="cmp-title__text" />
                  </Title>
                </div>
              </div>
              <Title>
                <h2 className="cmp-title__text">담당 역할</h2>
              </Title>
              <Text>
                <p>
                  <b>웹페이지 구현</b>
                  <br />
                  HTML과 CSS에서 React로의 전환을 통해 중복 코드를 줄이고
                  컴포넌트 기반 개발과 가상 DOM을 채택했습니다. 이후,
                  react-router-dom을 활용하여 동적 웹페이지를 구현하고, Hook을
                  이용한 상태 관리와 라이프사이클 대응을 통해 기술을
                  발전시켰습니다. 이를 통해 상태 변화에 따다 UI를 동적으로
                  구현하는 반응형을 구현했습니다. styled-components를 사용하여
                  CSS를 모듈화하고 스타일에 대한 유연성을 높이고, Axios를 통해
                  비동기 작업과 서버 통신을 처리했습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>구글 간편 로그인 구현</b>
                  <br />
                  Google API 클라이언트 라이브러리를 비동기적으로 로드하여
                  사용자가 간편히 구글 계정으로 로그인할 수 있도록 개발하였으며,
                  Axios를 사용하여 소셜 로그인 시 서버로 사용자 정보를 전송하여
                  인증 과정을 처리하였습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>다양한 필터를 이용한 검색</b>
                  <br />
                  검색 기능을 개선하여 제목, 사용자, 해시태그 등 다양한 필터를
                  이용하여 아이콘을 효율적으로 검색할 수 있도록 구현하였습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>아이콘 좋아요 및 사용자 팔로우</b>
                  <br />
                  useState 훅을 사용하여 아이콘의 좋아요 상태와 수를 관리하고,
                  로그인하지 않은 사용자에게는 로그인 유도 메시지를
                  표시하였습니다. 또한, useState 훅을 이용하여 사용자의 팔로우
                  상태를 관리하였습니다.
                </p>
              </Text>
              <Text>
                <p>
                  <b>프로필 설정 기능 구현</b>
                  <br />
                  프로필 설정 기능을 개발하여 사용자의 로그인 상태에 따라 프로필
                  수정 버튼을 활성화하도록 구현하였습니다.
                </p>
              </Text>
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
          <Title>
            <h2 className="cmp-title__text">코드 최적화 과정</h2>
          </Title>
          <Text>
            <p>
              <b>1. 이벤트 처리 최적화</b>
              <br />
              Input 컴포넌트의 이벤트 처리 시 Container 자체가 리랜더링되는
              이슈를 해결하기 위해 useCallback을 사용하여 값을 전달하는 함수를
              최적화했습니다.
            </p>
          </Text>
          <Text>
            <p>
              <b>2. 가독성 향상</b>
              <br />
              프로젝트에서 다양한 요청이 증가함에 따라 가독성이 떨어지는 Promise
              체인을 async/await 요청으로 대체해 코드 가독성을 증가시켰습니다.
            </p>
          </Text>
          <Text>
            <p>
              <b>3. 공통 컴포넌트화</b>
              <br />
              다양한 페이지를 개발하면서 같은 기능을 하는 중복 컴포넌트로 인해
              코드의 양이 길어지고, 가독성이 감소하는 문제를 해결하기 위해 공통
              컴포넌트화를 진행하였습니다.
            </p>
          </Text>
          <Text>
            <p>
              <b>3. 데이터 요청 병렬 처리</b>
              <br />
              기존에는 사용자 정보를 요청한 후에 사용자가 확인되면 사용자
              정보들을 순차적으로 요청하여 처리했지만, Promise.all을 도입하여
              병렬로 데이터를 가져와 렌더링 속도를 약 0.15초 개선했습니다.
            </p>
          </Text>
          <Title>
            <h2 className="cmp-title__text">프로젝트 회고</h2>
          </Title>
          <Text>
            <p>
              졸업작품으로 약 3개월간 개발한 ICONDB를 통해 많은 경험을
              쌓았습니다. 이 프로젝트를 통해 React와 styled-components를
              학습하면서, 기존에 사용했던 HTML/CSS를 React로 전환하는 경험을
              얻을 수 있었습니다. 또한, 이 프로젝트는 제 첫 프론트엔드
              프로젝트였기 때문에 다양한 기술적 문제에 직면하며 시행착오도
              있었지만, 이러한 문제들을 해결하면서 개발 지식을 향상시킬 수
              있었습니다.
            </p>
          </Text>
          <Text>
            <p>
              기술적인 측면 뿐만 아니라, 팀원과의 협업에서 발생한 의사소통
              문제에서도 많은 개선점을 발견할 수 있었습니다. Notion을 활용한
              일정 관리를 통해 프로젝트 완성 기간을 원활하게 맞출 수 있었고,
              정기 회의 시 회의록을 작성하여 꾸준한 개발 완성도를 유지할 수
              있었습니다.
            </p>
          </Text>
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
