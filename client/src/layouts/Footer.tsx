import React from "react";
import styled from "styled-components";

import SeperatorProps from "../components/ui/Seperator";
import Logo from "../assets/brand/icons/jihun-logo-white.svg";

export default function Footer() {
  return (
    <footer>
      <FooterContainer className="container responsivegrid footer-wrapper">
        <div className="cmp-container">
          <FooterContent className="container responsivegrid footer__content">
            <CmpContainer>
              <ImageBox className="image">
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
              </ImageBox>
              <SeperatorProps />
              <div className="container responsivegrid footer__navigation">
                <div className="cmp-container">
                  <div className="text footer__mobile-accordion">
                    <div className="cmp-text">
                      <h2>소 개</h2>
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
              <SeperatorProps />
              <PrivacyBox>
                <CmpTextBox>
                  <p>
                    <b>© 2023 JIHUN by Jihun Park.</b>
                  </p>
                </CmpTextBox>
              </PrivacyBox>
            </CmpContainer>
          </FooterContent>
        </div>
      </FooterContainer>
    </footer>
  );
}

const FooterContainer = styled.div`
  margin-top: 56px;
  background-color: #000;
  color: #fff;

  & > .cmp-container {
    margin-inline: 24px;
    max-width: none;
  }

  div.image {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 600px) {
    & > .cmp-container {
      margin-inline: 64px;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;

    & > .cmp-container {
      margin-inline: auto;
      max-width: 1120px;
    }
  }
`;

const CmpContainer = styled.div`
  margin-inline: -8px;
  padding: 56px 0;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 600px) {
    padding: 72px 0 96px;
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const FooterContent = styled.div`
  & .footer__navigation {
    margin-top: 8px;
    flex: 0 0 100%;
    min-width: 100%;
    padding-inline: 12px;

    & > .cmp-container {
      display: flex;
      flex-wrap: wrap;
      margin-inline: -8px;
    }

    @media only screen and (min-width: 600px) {
      margin-top: 0;
      flex: 0 0 100%;
      min-width: 100%;
      padding-inline: 12px;

      & > .cmp-container {
        margin-inline: -12px;
      }
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 66.6666667%;
      min-width: 66.6666667%;
      padding-inline: 16px;

      & > .cmp-container {
        margin-inline: -16px;
      }
    }
  }

  & .footer__mobile-accordion {
    margin-top: 24px;
    flex: 0 0 100%;
    min-width: 100%;
    padding-inline: 8px;

    & .cmp-text {
      display: flex;
      flex-direction: column;
      height: 100%;

      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font: 600 20px/28px "Noto Sans KR", Montserrat, sans-serif;
        letter-spacing: 0;
        margin-top: 0;

        @media only screen and (min-width: 600px) {
          color: #8b8b8b;
          cursor: auto;
          display: block;
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          margin: 0 0 24px;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }

    & :is(p, li) {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      margin: 16px 0 0;
      text-decoration: none;

      &:first-of-type {
        margin-top: 0;
      }

      a {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin: 16px 0 0;
        text-decoration: none;
      }
    }

    @media only screen and (min-width: 600px) {
      margin-top: 56px;
      flex: 0 0 100%;
      min-width: 100%;
      padding-inline: 12px;
    }

    @media only screen and (min-width: 1200px) {
      margin-top: 48px;
      flex: 0 0 25%;
      min-width: 25%;
      padding-inline: 16px;

      ul {
        display: block;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
`;

const ImageBox = styled.div`
  margin-top: 0;
  flex: 0 0 100%;
  height: 40px;
  margin-bottom: 56px;
  max-width: 100%;
  order: -2;
  padding-inline: 8px;

  & .cmp-adaptive-image picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
    }
  }

  & .cmp-image {
    width: fit-content;
    height: 100%;
  }

  img {
    width: auto;
    height: 100%;
  }

  @media only screen and (min-width: 600px) {
    flex: 0 0 50%;
    min-width: 50%;
    padding-inline: 16px;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 50%;
    min-width: 50%;
    padding-inline: 16px;
  }
`;

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
