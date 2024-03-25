import React from "react";
import styled from "styled-components";
import LogoContainer from "./components/LogoContainer";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import { HeaderContainer } from "../Wrapper";

import "../../styles/Header.css";

export default function Header() {
  return (
    <HeaderHeader>
      <HeaderContainer>
        <LogoContainer />
        <HeaderNavigation />
      </HeaderContainer>
    </HeaderHeader>
  );
}

const HeaderHeader = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 72px;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    height: 80px;
  }
`;
