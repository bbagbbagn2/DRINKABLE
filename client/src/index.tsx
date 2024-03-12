import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;

  }

  b, strong {
    font-weight: bolder;
  }

  code, kbd, samp {
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  img {
    border-style: none;
  }

  button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,input {
    overflow: visible;
  }

  button,select {
    text-transform: none;
  }

  * {
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


  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture {
    background-color: transparent;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail):not(.design-token--disabled) picture {
    background-color: transparent;
  }

  main.container .cmp-container :is(.projects-list,.secondary-header,.secondary-header-with-navigation,.secondary-header-logo,.youtube-subscribe,.cmp-experiencefragment--footer,.container--mobile-app-buttons) picture {
    background: none;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture img {
    opacity: 0;
    transition: opacity .4s ease;
  }

  main.container .cmp-container :is(.projects-list,.secondary-header,.secondary-header-with-navigation,.secondary-header-logo,.youtube-subscribe,.cmp-experiencefragment--footer,.container--mobile-app-buttons) picture img {
    opacity: 1;
    transition: none;
  }

  main.container :is(.adaptiveImage,.countdown-card__event-image,.teaser,.content-wrapper__image,.recipeHero,.image--hero-image,.prize-catalog__image-wrapper,.countdown-card--image,.countdown-card__background,.cmp-embed--thumbnail) picture.loaded.visible img {
    opacity: 1;
  }

  @media only percy {
    picture img {
      opacity: 1 !important;
      transition: none;
    }
  }

  a {
    word-wrap: break-word;
    color: #000;
    font: 600 14px/24px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
    text-decoration: underline;
  }

  ul {
    margin-block: 0 12px;
    color: #000;
    letter-spacing: 0;
  }

  h1 {
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

  img {
    width: 100%;
    height: auto;
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

  .grid.two-columns>.cmp-container {
    display: flex;
    flex-wrap: wrap;
    margin-inline: -8px;
  }

  .grid.two-columns>.cmp-container>* {
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

  .content-card .cmp-teaser__action-container {
    margin-top: auto;
  }

  .content-card:not(.design-token--disabled) .cmp-teaser__action-link {
    color: #000;
  }

  .content-card .cmp-teaser__action-link {
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: 48px;
    display: inline-flex;
    height: 24px;
    margin-bottom: 0;
    padding: 0;
    text-decoration: none;
    width: auto;
    font: 700 16px / 24px 'Noto Sans KR', 'Montserrat', sans-serif;
  }

  .publicationDate {
    margin-top: 24px;
  }

  .publicationDate .cmp-publication-date {
    font-weight: 700;
    margin-bottom: 0;
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

    .grid.two-columns>.cmp-container {
      margin-inline: -16px;
    }

    .grid.two-columns>.cmp-container>* {
      flex: 0 0 50%;
      min-width: 50%;
      padding-inline: 16px;
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

    .content-card .cmp-teaser__action-link {
      margin-bottom: 0;
    }

    .content-card:not(.design-token--disabled):hover .cmp-teaser__action-link {
      color: #717171;
    }

    .hero.hero.content-on-bottom,
    .hero.hero.content-on-top {
      background: none;
    }

    .publicationDate {
      margin-top: 32px;
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
