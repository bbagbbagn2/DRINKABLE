import React from "react";
import styled from "styled-components";

export default function LayoutContainer() {
  return <Container></Container>;
}

const Container = styled.div`
  margin-inline: 24px;
  max-width: none;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    height: 80px;
    max-width: 1280px;
  }
`;

const FooterContainer = styled(Container)`
  @media only screen and (min-width: 600px) {
    margin-inline: 64px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1120px;
  }
`;

export { HeaderContainer, FooterContainer };