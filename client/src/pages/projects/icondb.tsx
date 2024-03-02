import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Title from "../../components/ui/Title";

import SecondaryHeader from "../../components/ui/SecondaryHeader";
import DesktopBanner from "../../components/ui/DesktopBanner";
import GitHubCard from "../../components/ui/GitHubCard";
import SeperatorProps from "../../components/ui/Seperator";

import main from '../../assets/images/background.jpg';

export default function Icondb() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <SecondaryHeader />
          <div className="container responsivegrid">
            <div className="cmp-container"></div>
          </div>
          <DesktopBanner />
          <div className="container responsivegrid">
            <div className="cmp-container">
              <Title>
                <h2 className="cmp-title__text">ICONDB 프로젝트</h2>
              </Title>
              <div className="text">
                <div className="cmp-text">
                  <p style={{textAlign: "center"}}>
                    무료로 아이콘을 다운받을 수 있는 웹 사이트입니다.
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
                  <div className="teaser content-card">
                    <div className="cmp-teaser">
                      <div className="cmp-teaser__content">
                        <h3 className="cmp-teaser__title">Front-End</h3>
                        <div className="cmp-teaser__description">
                          <p>
                            <b>
                              HTML, CSS, JavaScript
                              <hr />
                              React, styled-components
                              <hr />
                              Axios
                              <hr />
                            </b>
                          </p>
                        </div>
                      </div>
                      <div className="cmp-teaser__image">
                        <div className="cmp-adaptive-image cmp-image">
                          <picture className="loaded visible">
                            <img src={main} loading="lazy" alt="Front-End"/>
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="teaser content-card">
                    <div className="cmp-teaser">
                      <div className="cmp-teaser__content">
                        <h3 className="cmp-teaser__title">Back-End</h3>
                        <div className="cmp-teaser__description">
                          <p>
                            <b>
                              Node.js, Express.js
                              <hr />
                              MySQL
                              <hr />
                            </b>
                          </p>
                        </div>
                      </div>
                      <div className="cmp-teaser__image">
                        <div className="cmp-adaptive-image cmp-image">
                          <picture className="loaded visible">
                            <img src={main} loading="lazy" alt="Front-End"/>
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="teaser content-card">
                    <div className="cmp-teaser">
                      <div className="cmp-teaser__content">
                        <h3 className="cmp-teaser__title">Communication</h3>
                        <div className="cmp-teaser__description">
                          <p>
                            <b>
                              Git & GitHub
                              <hr />
                              Notion
                              <hr />
                            </b>
                          </p>
                        </div>
                      </div>
                      <div className="cmp-teaser__image">
                        <div className="cmp-adaptive-image cmp-image">
                          <picture className="loaded visible">
                            <img src={main} loading="lazy" alt="Front-End"/>
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GitHubCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
