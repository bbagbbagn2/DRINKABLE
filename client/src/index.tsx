import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  :root {
    --scrollWidth: 17px;
  }
  
  .root > .cmp-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .root > .cmp-container {

    main {
      &.container {
        flex-grow: 1;
        width: auto;
        > .cmp-container {
          > .title:first-of-type .cmp-title__text {
            margin-top: 56px;
          }

          > .image {
            &:first-of-type {
              margin-top: 0;
            }
          }
        }

        @media only screen and (min-width: 1200px) {
          > .cmp-container > .title:first-of-type .cmp-title__text {
            margin-top: 64px;
          }
        }
      }
    }
  }

  main.container {
    margin-inline: 24px;
    max-width: none;
  }

  .container.grid>.cmp-container {
    display: flex;
    flex-wrap: wrap;
    margin-inline: -8px;
  }

  html {
    -webkit-text-size-adjust: 100%;
    line-height: 1.15;
  }

  body {
    background: #f1f1f1;
    direction: 1tr;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    margin: 0;
    margin-block: 0 12px;
    color: #000;
    font: 400 14px/24px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
  }

  main {
    display: block;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture {
    background-color: transparent;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail):not(.design-token--disabled) picture {
    background-color: transparent;
  }

  main.container .cmp-container :is(.brands-list,.secondary-header,.secondary-header-with-navigation,.secondary-header-logo,.youtube-subscribe,.cmp-experiencefragment--footer,.container--mobile-app-buttons) picture {
    background: none;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture img {
    opacity: 0;
    transition: opacity .4s ease;
  }

  main.container .cmp-container :is(.brands-list,.secondary-header,.secondary-header-with-navigation,.secondary-header-logo,.youtube-subscribe,.cmp-experiencefragment--footer,.container--mobile-app-buttons) picture img {
    opacity: 1;
    transition: none;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture.loaded.visible img {
    opacity: 1;
  }

  a {
    word-wrap: break-word;
    color: #000;
    font: 600 14px/24px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
    text-decoration: underline;
    background-color: transparent;
  }

  ul {
    margin-block: 0 12px;
    color: #000;
    letter-spacing: 0;
  }

  h1 {
    margin: 0.67em 0;
    margin-top: 0;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 0;
  }

  h2 {
    font: 700 24px/32px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
    margin-top: 0;
  }

  h3 {
    margin-top: 0;
    font: 700 20px/28px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
  }

  p {
    font: 400 14px/24px 'Noto Sans KR', 'Montserrat', sans-serif;
  }

  b, strong {
    font-weight: bolder;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  img {
    width: 100%;
    height: auto;
    border-style: none;
  }

  .text :is(h1,h2,h3,h4,h5,h6) {
      margin: 56px 0 0;
  }

  .text p {
    margin: 16px 0 0;
  }

  .button,
  .button .cmp-button {
    display: flex;
    justify-content: center;
  }

  .projects-list+.button {
    .cmp-button {
      margin: 24px 0 0;
    }
  }

  .button .cmp-button {
    align-items: center;
    background-color: #000;
    border: none;
    border-radius: 48px;
    color: #fff;
    height: 40px;
    margin-top: 56px;
    padding: 0;
    text-decoration: none;
    width: 100%;
  }

  .button .cmp-button .cmp-button__text {
    margin-top: 1px;
  }

  .button.button--secondary .cmp-button {
    align-items: center;
    background-color: var(--surface-action-alpha-main-default,transparent);
    border: none;
    border: 2px solid var(--stroke-neutral-main-regular-default,#000);
    border-radius: 48px;
    color: var(--text-neutral-main-regular-default,#000);
    display: flex;
    font: 600 14px / 14px 'Noto Sans KR', 'Montserrat', sans-serif;
    height: 40px;
    justify-content: center;
    padding: 0;
    text-decoration: none;
    width: 100%
  }

  .button.button--secondary .cmp-button .cmp-button__text {
    margin-top: 1px;
  }

  .button.button--icon .cmp-button, .button.button--icon.button--white .cmp-button {
    height: 40px;
    width: 40px;
  }

  .cmp-title__text {
    color: #000;
    margin-bottom: 0;
    margin-top: 56px;
    text-align: center;
  }

  .cmp-button {
    align-items: center;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 48px;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 0;
    text-decoration: none;
    width: 100%;
  }

  .image {
    margin-top: 24px;
  }

  .hero {
    position: relative;
  }

  .hero .cmp-teaser {
    height: 100%;
    margin: 0 auto;
    max-width: 551px;
    position: relative;
  }

  .hero:not(.design-token--disabled) .cmp-teaser__content {
    color: #fff;
  }

  .hero .cmp-teaser__content {
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 24px 0 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
  }

  .hero .cmp-teaser__image {
    aspect-ratio: .7496871089;
    bottom: 0;
    margin-left: -24px;
    max-width: calc(100% + 48px);
    position: relative;
    top: 0;
    width: min(100vw - var(--scrollWidth),1440px);
  }

  .hero.hero .cmp-teaser__image:after {
    content: "";
    inset: 0;
    position: absolute;
  }

  .hero .cmp-teaser__image .cmp-image {
    height: 100%;
  }

  .hero .cmp-teaser__image img {
    height: 100%;
    object-fit: cover;
  }

  .cmp-adaptive-image picture {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .cmp-adaptive-image picture img {
    display: block;
  }

  .cmp-image__image {
    width: 100%;
  }

  .action-card.black-bg {
    background-color: #000;
    color: #fff;
  }

  .experiencefragment:not(.design-token--disabled) .action-card {
    background-color: #fff;
    color: #000;
  }

  .experiencefragment:not(.design-token--disabled) .action-card.black-bg {
    background-color: #000;
    color: #fff;
  }

  .experiencefragment:not(.design-token--disabled) .action-card.black-bg .button .cmp-button {
    border-color: #fff;
    color: #fff;
  }

  .experiencefragment:not(.design-token--disabled) .action-card .button .cmp-button {
    border-color: #000;
    color: #000;
  }

  .experiencefragment:not(.design-token--disabled) {
    .action-card {
      background-color: #fff;
      color: #000;

      &.black-bg{
        background-color: #000;
        color: #fff;

        .button {
          .cmp-button {
            border-color: #fff;
            color: #fff;

            :hover {
              background-color: hsla(0,0%,100%,.12);
            }
          }
        }
      }
    }
  }

  .action-card {
    background-color: #fff;
    color: #000;
    border-radius: 16px;
    margin-top: 56px;

    >.cmp-container {

      :is(.button, .button .button--white) {
        .cmp-button {
          border-color: #000;
          color: #000;
          margin-block: 0;
        }
      }
    }
  }

  .grid.three-columns>.cmp-container {
    display: flex;
    flex-wrap: wrap;
    margin-inline: -8px;
  }

  .grid.three-columns>.cmp-container>* {
    flex: 0 0 100%;
    min-width: 100%;
    padding-inline: 8px;
  }

  .content-card {
    margin-top: 32px;
    margin-bottom: 0;
  }

  .content-card a {
    text-decoration: none;
  }

  .content-card .cmp-teaser {
    border-radius: 16px;
    box-shadow: 0 14px 24px rgba(0,0,0,.06);
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    margin-top: 0;
    overflow: hidden;
    width: 100%;
  }

  .content-card:not(.design-token--disabled) .cmp-teaser__content,
  .content-card:not(.design-token--disabled) .cmp-teaser__image {
    background-color: #fff;
  }

  .content-card .cmp-teaser__content,
  .content-card .cmp-teaser__image {
    background-color: #fff;
    width: 100%;
  }

  .content-card:not(.design-token--disabled) .cmp-teaser__content {
    color: #000;
  }

  .content-card .cmp-teaser__content {
    color: #000;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px 24px;
  }

  .content-card .cmp-teaser__title {
    margin-bottom: 8px;
  }

  .content-card .cmp-teaser__description p {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 1200px) {
    html, body {
      margin: 0;
      font-size: 16px;
      line-height: 26px;
    }

    ul {
      font-size: 16px;
      line-height: 26px;
    }
    
    a {
      font-size: 16px;
      line-height: 26px;
    }

    h1 {
      font-size: 38px;
      line-height: 48px;
    }

    h2 {
      font-size: 32px;
      line-height: 40px;
    }

    h3 {
      font-size: 24px;
      line-height: 32px;
    }

    p {
      margin-bottom: 14px;
      font-size: 16px;
      line-height: 26px;
    }

    .root > .cmp-container main.container {
      width: 100%;
    }

    main.container {
      margin-inline: auto;
      max-width: 1120px;
    }

    .container.grid>.cmp-container {
      margin-inline: -16px;
    }

    .grid.three-columns>.cmp-container {
        margin-inline: -16px;
    }

    .grid.three-columns>.cmp-container>* {
        flex: 0 0 33.3333333333%;
        min-width: 33.3333333333%;
        padding-inline: 16px;
    }

    .projects-list+.button {
      .cmp-button {
        margin-top: 32px;
      }
    }

    .button .cmp-button {
      margin-top: 64px;
      width: 327px;
    }

    .button.button--secondary .cmp-button {
      width: 327px;
    }

    .button.button--secondary .cmp-button:hover {
      background-color: var(--surface-action-alpha-main-hover,rgba(0,0,0,.12));
    } 


    .hero .cmp-teaser {
      margin-left: 24px;
      max-width: unset;
      width: min(100vw - var(--scrollWidth),1440px);
    }

    .hero .cmp-teaser__image {
      aspect-ratio: 2.3225806452;
      margin: 0;
      max-width: unset;
    }

    .cmp-title__text {
      margin-top: 120px;
    }

    .text :is(h1,h2,h3,h4,h5,h6) {
      margin-top: 64px;
    }

    .text p {
      margin-top: 24px;
    }

    .image {
      margin-top: 32px;
    }

    .action-card {
      margin-top: 120px;
    }

    .content-card {
      margin-top: 48px;
    }

    .content-card .cmp-teaser__content {
      padding: 40px;
    }

    .content-card .cmp-teaser__title {
      margin-bottom: 16px;
    }

    .content-card .cmp-teaser__description p {
      margin-bottom: 24px;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
