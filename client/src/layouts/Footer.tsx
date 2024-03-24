import React from "react";
import styled from "styled-components";
import Separator from "../components/ui/Separator";
import Logo from "../assets/brand/icons/jihun-logo2-white.svg";
import LogoContainer from "./LogoContainer";
import BottomContainer from "./BottomContainer";
import "../styles/Footer.css";

import { IoLogoGithub } from "react-icons/io";

export default function FooterContainer() {
  return (
    <Footer>
      <Container>
        <Wrapper>
          <LogoContainer />
          <SeparatorContainer>
            <Separator />
          </SeparatorContainer>
          <div className="container responsivegrid footer__navigation">
            <div className="cmp-container">
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
            </div>
          </div>
          <div className="separator--dynamic separator--mobile-nav">
            <hr />
          </div>
          <div className="container responsivegrid footer__social-media">
            <div className="cmp-container">
              <div className="button footer__button--social-media">
                <a
                  className="cmp-button"
                  rel="noreferrer"
                  aria-label="github"
                  target="_blank"
                  href="https://github.com/bbagbbagn2"
                >
                  <IoLogoGithub />
                </a>
              </div>
            </div>
          </div>
          <SeparatorBottomContainer>
            <Separator />
          </SeparatorBottomContainer>
          <BottomContainer />
        </Wrapper>
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`
  margin-top: 56px;
  background-color: #000;
  color: #fff;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const Container = styled.div`
  margin-inline: 24px;
  max-width: none;

  @media only screen and (min-width: 600px) {
    margin-inline: 64px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    max-width: 1120px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;
  padding: 56px 0;

  @media only screen and (min-width: 600px) {
    padding: 72px 0 96px;
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const SeparatorContainer = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  margin-top: 56px;
  padding-inline: 8px;

  @media only screen and (min-width: 600px) {
    padding-inline: 12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    padding-inline: 16px;
  }

   div {
    margin-top: 0;
  }

  hr {
    margin: 0;
  }
`;

const SeparatorBottomContainer = styled(SeparatorContainer)`
  display: none;

  @media only screen and (min-width: 1200px) {
    display: block;
  }
`