import React from "react";
import styled from "styled-components";
import MenuList from "./MenuList/MenuList";

export default function HeaderNavigation() {
  return (
    <NavigationContainer>
      <HeaderWrapper>
        <MenuList />
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
