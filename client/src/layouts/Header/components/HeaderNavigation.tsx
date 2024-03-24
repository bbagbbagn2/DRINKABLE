import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import "../../styles/Header.css";

export default function Header() {
  const location = useLocation();
  const isAboutmePage = location.pathname === "/about-me";
  const isProjectsPage = location.pathname.includes("/projects");

  return (
    <NavigationContainer>
      <HeaderWrapper>
        <HeaderList>
          <HeaderItem>
            <b>
              <Link
                href="/about-me"
                role="button"
                className={isAboutmePage ? "active-element" : ""}
              >
                About me
              </Link>
            </b>
          </HeaderItem>
          <li className="has-submenu">
            <a
              href="/projects"
              role="button"
              data-text="About me"
              aria-expanded="false"
              className={isProjectsPage ? "active-element" : ""}
            >
              Projects
            </a>
            <ul className="submenu">
              <li>
                <a href="/projects/jihun" data-text="JIHUN Project">
                  JIHUN Project
                </a>
              </li>
              <li>
                <a
                  href="/projects/pjh-portfolio"
                  data-text="PJH-Portfolio Project"
                >
                  PJH-Portfolio Project
                </a>
              </li>
              <li>
                <a href="/projects/beats" data-text="beats Project">
                  beats Main Project
                </a>
              </li>
              <li>
                <a href="/projects/icondb" data-text="ICONDB Project">
                  ICONDB Project
                </a>
              </li>
            </ul>
          </li>
          <li>
            <b>
              <a href="/" role="button">
                Resume
              </a>
            </b>
          </li>
        </HeaderList>
      </HeaderWrapper>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  margin: 0;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-inline-start: 24px;
  }
`;

const HeaderWrapper = styled.div`
  padding-inline: 24px;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    min-width: 418px;
    padding: 0;
    width: calc(100% - 350px);
  }
`;

const HeaderList = styled.ul`
  @media only screen and (min-width: 1200px) {
    align-items: center;
    display: flex;
    height: 80px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const HeaderItem = styled.li`
  @media only screen and (min-width: 1200px) {
    color: #000;
    height: 100%;
    letter-spacing: 0;
    margin: 0 20px;
    position: relative;
    text-decoration: none;
    align-items: center;
    display: flex;
  }
`;

const Link = styled.a`
  @media only screen and (min-width: 1200px) {
    align-items: center;
    color: #000;
    cursor: pointer;
    display: flex;
    height: 100%;
    letter-spacing: 0;
    position: relative;
    text-decoration: none;
  }
`;
