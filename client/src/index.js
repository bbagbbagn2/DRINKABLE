import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    color: #333;
    font-size: .875rem;
    font-weight: 300;
    letter-spacing: .00625rem;
    line-height: 1.5;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    @media screen and (max-width: 37.5rem) {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

