import React from "react";
import styled from "styled-components";

export default function FooterNavigation() {
  return (
    <Container>
      <Wrapper>
        <div className="text footer__mobile-accordion">
          <div className="cmp-text">
            <h2>소 개</h2>
            <ul>
              <li>
                <a href="/about-me">About Me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text footer__mobile-accordion">
          <div className="cmp-text">
            <h2>도움이 필요하세요?</h2>
            <ul>
              <li>
                <a href="/sitemap">사이트 맵</a>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  margin-top: 8px;
  padding-inline: 8px;

  @media only screen and (min-width: 600px) {
    padding-inline: 12px;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 66.6666666667%;
    min-width: 66.6666666667%;
    padding-inline: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;

  @media only screen and (min-width: 600px) {
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;
