import React from "react";
import styled from "styled-components";
import LogoContainer from "./components/LogoContainer";
import Separator from "../../components/ui/Separator";
import { SeparatorContainer } from "./Container/FooterContainer";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";
import SocialContainer from "./components/SocialContainer";
import BottomContainer from "./components/BottomContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <LogoContainer />
          <SeparatorContainer>
            <Separator />
          </SeparatorContainer>
          <FooterNavigation />
          <SocialContainer />
          <SeparatorBottomContainer>
            <Separator />
          </SeparatorBottomContainer>
          <BottomContainer />
        </Wrapper>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin-top: 56px;
  background-color: #000;
  color: #fff;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const Container = styled.div`
  margin-inline: 24px;
  max-width: none;

  @media only screen and (min-width: 600px) {
    margin-inline: 64px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    max-width: 1120px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;
  padding: 56px 0;

  @media only screen and (min-width: 600px) {
    padding: 72px 0 96px;
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const SeparatorBottomContainer = styled(SeparatorContainer)`
  display: none;

  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;
