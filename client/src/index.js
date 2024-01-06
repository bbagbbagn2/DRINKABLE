import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
  }

  html {
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
  }
  body {
    position: relative;
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    color: #333;
    font-size: .875rem;
    letter-spacing: .03125rem;
    line-height: 1.5;

    @media screen and (max-width: 37.5rem) {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  button {
    margin: 0;
  }

  p, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3 {
    font-size: inherit;
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

