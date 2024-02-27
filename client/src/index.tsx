import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
  }
  
  :root {
    --scrollWidth: 17px;
  }

  .root >.cmp-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;

    main {
      &.container {
        width: auto;
        flex-grow: 1;

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
          width: 100%;

          > .cmp-container > .title:first-of-type .cmp-title__text {
            margin-top: 64px;
          }
        }
      }
    }


  }

  #header {
    margin: 0 auto;
    width: 100%;
    height: auto !important;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    background: #fff !important;

    @media screen and (max-width: 767.98px){
      border-bottom: 0;
    }
  }

  #footer {
    margin: 50px auto 0;
    margin-top: 0;
    padding: 0;
    width: 100%;
    border: 0;
    border-top: 1px solid #e5e5e5;
    background-color: #000;

    @media screen and (max-width: 767.98px){
      margin: 0;
      margin-top: 20px;
    }
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

    &.container {
      margin-inline: 24px;
      max-width: none;

      .cmp-container {
        & :is(.projects-list, .secondary-header-logo) picture {
          background: none;

          img {
            opacity: 1;
            transition: none;
          }
        }
      }

      & :is(.adaptiveImage, .teaser) picture {
        background-color: var(--surface-brand-primary-regular,transparent);
        
        &.loaded.visible img {
          opacity: 1;
        }

        img {
          opacity: 0;
          transition: opacity .4s ease;
        }
      }
      @media only screen and (min-width: 1200px) {
        margin-inline: auto;
        max-width: 1120px;
      }
    }
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
    font: 600 24px/32px 'Noto Sans KR', 'Montserrat', sans-serif;
    letter-spacing: 0;
    margin-top: 0;
  }

  h3 {
    margin-top: 0;
    font: 600 20px/28px 'Noto Sans KR', 'Montserrat', sans-serif;
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

  .text {
    & :is(h1,h2,h3,h4,h5,h6) {
      margin: 56px 0 0;
    }

    p {
      margin: 16px 0 0;
    }
  }

  .image {
    margin-top: 24px;
  }

  .cmp-adaptive-image {
    picture {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;

      img {
        display: block;
      }
    }
  }

  .cmp-image__image {
    width: 100%;
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

    .text {
      & :is(h1,h2,h3,h4,h5,h6) {
        margin-top: 64px;
      }

      p {
        margin-top: 24px;
      }
    }

    .image {
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
