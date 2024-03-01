import React from "react";
import styled from "styled-components";

import SeperatorProps from "../components/ui/Seperator";
import Logo from "../assets/brand/icons/jihun-logo-white.svg";

import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="experiencefragment">
      <div className="cmp-container">
      <div className="container responsivegrid footer-wrapper">
        <div className="cmp-container">
          <div className="container responsivegrid footer__content">
            <div className="cmp-container">
              <div className="adaptiveImage image footer__logo">
                <div className="cmp-adaptive-image cmp-image">
                  <picture>
                    <img
                      src={Logo}
                      loading="lazy"
                      alt="The DRINKABLE Logo"
                      className="cmp-image__image"
                    />
                  </picture>
                </div>
              </div>
              <SeperatorProps />
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

              </div>
              <SeperatorProps />
              <div className="text footer__bottom--privacy">
                <div className="cmp-text">
                  <p>
                    <b>© 2023 JIHUN by Jihun Park.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

const PrivacyBox = styled.div`
  margin-top: 32px;
  padding-inline: 8px;
  min-width: 100%;
  display: flex;
  flex: 0 0 100%;
  align-items: center;

  p {
    margin: 16px 0 0;
  }

  @media only screen and (min-width: 600px) {
    padding-inline: 12px;
    min-width: 100%;
    flex: 0 0 100%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    padding-inline: 16px;
    min-width: 50%;
    flex: 0 0 50%;
    align-items: flex-start;
    justify-content: flex-end;
    flex-grow: 1;

    p {
      margin-top: 24px;
    }
  }
`;

const CmpTextBox = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    display: inline-block;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: 0;
    text-decoration: none;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;
