import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
  }

  .root >.cmp-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
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
  }

  a {
    word-wrap: break-word;
    color: #000;
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

  h3 {
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0;
  }

  p {
    margin-block: 0 12px;
    letter-spacing: 0;
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

      h3 {
        font-size: 24px;
        line-height: 32px;
      }

      p {
        margin-bottom: 14px;
        font-size: 16px;
        line-height: 26px;
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
