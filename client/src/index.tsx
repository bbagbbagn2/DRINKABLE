import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
  }

  :root {
    --swiper-navigation-size: 44px;
    view-transition-name: root;
  }

  #root {
    position: relative;
    width: 100%;
    min-height: 550px;
  }

  #container {
    position: relative;
    margin: 0 auto;
    margin-left: 0 !important;
    padding: 0;
    width: 100%;
    zoom: 1;
  }

  #header {
    margin: 0 auto;
    width: 100%;
    height: auto !important;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    background: #fff !important;
  }

  #footer {
    margin: 50px auto 0;
    margin-top: 0 !important;
    padding: 0;
    width: 100%;
    border: 0;
    border-top: 1px solid #e5e5e5;
    background-color: #000;
  }

  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 100%;
    max-width: 1440px;
    height: auto !important;
    min-height: 100%;
    background: #fff;
    color: #000;
    line-height: 1.2em;
    -webkit-text-size-adjust: none;
    
    > #root {
      margin: 0 auto; 
    }

    @media screen and (max-width: 37.5rem) {
      width: 100%;
    }
  }

  html, body {
    font-size: 12px !important;
  }

  html, body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, input, button, p {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }


  a {
    color: #000;
    text-decoration: none;
  }

  button {
    margin: 0;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  h1, h2, h3 {
    font-size: inherit;
    margin: 0;
    padding: 0;
  }

  img {
    -webkit-perspective: 1;
    border: none;
  }

  img, svg {
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
    vertical-align: middle;
  }


`;

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);

