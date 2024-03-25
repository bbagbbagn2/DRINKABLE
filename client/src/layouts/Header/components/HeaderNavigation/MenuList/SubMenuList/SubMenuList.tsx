import React from "react";
import styled from "styled-components";
import { HeaderProjectsItems } from "../../../../../../data/data";

export default function SubMenuList() {
  return (
    <List>
      {HeaderProjectsItems.map((item, index) => (
        <li key={index}>
          <SubMenuLink href={item.url} data-text={item.text}>
            {item.text}
          </SubMenuLink>
        </li>
      ))}
    </List>
  );
}

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

    &::before {
      background-color: #eb3f3f;
      content: "";
      display: none;
      height: 4px;
      left: 50%;
      position: absolute;
      top: calc(100% - 4px);
      translate: -50% 0;
      width: 100%;
    }
  }
`;

const SubMenuLink = styled(Link)`
  @media only screen and (min-width: 1200px) {
    display: block;
    font: 400 12px / 18px "Noto Sans KR", "Montserrat", sans-serif;
    height: 18px;
    margin: 0 0 8px;

    &:hover {
      font-weight: 700;
    }

    &::after {
      content: attr(data-text);
      display: block;
      font: inherit;
      font-weight: 700;
      height: 0;
      overflow: hidden;
      padding-right: 19px;
      visibility: hidden;
    }
  }
`;

const List = styled.ul`
  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
    display: none;
    flex-direction: column;
    height: auto;
    left: -20px;
    list-style: none;
    margin: 0;
    padding: 32px;
    position: absolute;
    top: 100%;
    width: max-content;
    z-index: 400;

    > li {
      margin: 0;

      &:last-of-type {
        ${SubMenuLink} {
          margin: 0;
        }
      }
    }
  }
`;
