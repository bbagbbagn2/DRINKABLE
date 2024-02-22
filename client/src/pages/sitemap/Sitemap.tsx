import React from "react";
import styled from "styled-components";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

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
          <div className="seperator">
            <CmpSeperator>
              <hr className="cmp-seperator__horizontal-rule" />
            </CmpSeperator>
          </div>
          <div className="text">
            <div className="cmp-text">
              <h2>Allergies</h2>
              <p>
                <a href="/allergies" target="_self" rel="noopener noreferrer">
                  식품&nbsp;알레르기&nbsp;보기
                </a>
              </p>
            </div>
          </div>
          <div className="seperator">
            <CmpSeperator>
              <hr className="cmp-seperator__horizontal-rule" />
            </CmpSeperator>
          </div>
          <div className="text">
            <div className="cmp-text">
              <h2>Footer</h2>
            </div>
          </div>
          <Container className="container responsivegrid grid three-columns">
            <div className="cmp-container">
              <div className="text text--external-links">
                <div className="cmp-text">
                  <p>
                    <b>소 개</b>
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
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const CmpSeperator = styled.div`
  margin-top: 56px;

  .cmp-seperator__horizontal-rule {
    border: 0;
    border-top: 1px solid #d5d5d5;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 64px;
  }
`;

const Container = styled.div`
  &.grid.three-columns > .cmp-container {
    display: flex;
    flex-wrap: wrap;
    margin-inline: -8px;

    > * {
      flex: 0 0 100%;
      min-width: 100%;
      padding-inline: 8px;
    }

    @media only screen and (min-width: 1200px) {
      margin-inline: -16px;

      > * {
        flex: 0 0 33.33333333%;
        min-width: 33.33333333%;
        padding-inline: 16px;
      }
    }
  }
`;
