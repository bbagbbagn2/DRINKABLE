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