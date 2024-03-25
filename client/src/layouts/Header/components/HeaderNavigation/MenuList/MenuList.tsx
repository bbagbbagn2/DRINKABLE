import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuLink from "./MenuLink";
import SubMenuList from "./SubMenuList/SubMenuList";

type LinkProps = {
  isCurrentPage?: boolean;
};

export default function MenuList() {
  const location = useLocation();
  const isAboutMe = location.pathname === "/about-me";
  const isProjectsPage = location.pathname.startsWith("/projects");

  return (
    <HeaderList>
      <HeaderItem>
        <b>
          <MenuLink
            href="/about-me"
            isCurrentPage={isAboutMe}
            title="About Me"
          />
        </b>
      </HeaderItem>
      <HeaderItem>
        <MenuLink
          href="projects"
          isCurrentPage={isProjectsPage}
          title="Projects"
          isButton
        >
          <SubMenuList />
        </MenuLink>
      </HeaderItem>
      <HeaderItem>
        <b>
          <MenuLink href="/ " title="Resume" />
        </b>
      </HeaderItem>
    </HeaderList>
  );
}

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
    font: 700 14px / 17px "Noto Sans KR", "Montserrat", sans-serif;
    height: 100%;
    letter-spacing: 0;
    margin: 0 20px;
    position: relative;
    text-decoration: none;
    align-items: center;
    display: flex;

    &:hover {
      & > a::before {
        display: block;
      }

      ul {
        display: flex;
      }
    }
  }
`;

const Link = styled.a<LinkProps>`
  @media only screen and (min-width: 1200px) {
    align-items: center;
    color: #000;
    cursor: pointer;
    display: flex;
    font: 700 14px / 17px "Noto Sans KR", "Montserrat", sans-serif;
    height: 100%;
    letter-spacing: 0;
    position: relative;
    text-decoration: none;

    &::before {
      background-color: #eb3f3f;
      content: "";
      display: ${({ isCurrentPage }) => (isCurrentPage ? "block" : "none")};
      height: 4px;
      left: 50%;
      position: absolute;
      top: calc(100% - 4px);
      translate: -50% 0;
      width: 100%;
    }
  }
`;

const ButtonLink = styled(Link)`
  @media only screen and (min-width: 1200px) {
    flex-direction: column;
    justify-content: center;

    &::after {
      content: attr(data-text);
      display: block;
      font: inherit;
      font-weight: 700;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
`;
