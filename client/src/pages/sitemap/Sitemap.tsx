import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import SeperatorProps from "../../components/ui/Separator";

export default function Sitemap() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <div className="text">
            <div className="cmp-text">
              <h1>사이트 맵</h1>
            </div>
          </div>
          <SeperatorProps />
          <div className="text">
            <div className="cmp-text">
              <h2>About Me</h2>
              <p>
                <a href="/about-me" target="_self" rel="noopener noreferrer">
                  About Me
                </a>
              </p>
            </div>
          </div>
          <SeperatorProps />
          <div className="text">
            <div className="cmp-text">
              <h2>Projects</h2>
              <p>
                <a href="/projects" target="_self" rel="noopener noreferrer">
                  프로젝트 전체 보기
                </a>
              </p>
            </div>
          </div>
          <div className="container responsivegrid grid three-columns">
            <div className="cmp-container">
              <div className="text text--external-links">
                <div className="cmp-text">
                  <p>
                    <a href='/projects/icondb'>ICONDB</a>
                  </p>
                  <p>
                    <a href='/projects/pjh-portfolio'>PJH-Portfolio</a>
                  </p>
                  <p>
                    <a href='/projects/jihun'>JIHUN</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SeperatorProps />
          <div className="text">
            <div className="cmp-text">
              <h2>Footer</h2>
            </div>
          </div>
          <div className="container responsivegrid grid three-columns">
            <div className="cmp-container">
              <div className="text text--external-links">
                <div className="cmp-text">
                  <p>
                    <b>소 개</b>
                  </p>
                  <p>
                    <a href="/about-me">About me</a>
                  </p>
                </div>
              </div>
              <div className="text text--external-links">
                <div className="cmp-text">
                  <p>
                    <b>도움이 필요하세요?</b>
                  </p>
                  <p>
                    <a href="/sitemap">사이트 맵</a>
                  </p>
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
