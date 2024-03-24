import React, { ReactNode } from "react";
import styled from "styled-components";

type FooterContainerProps = {
  children: ReactNode;
};
export default function FooterContainer({ children }: FooterContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  padding-inline: 8px;

  @media screen and (min-width: 600px) {
    padding-inline: 12px;
  }

  @media screen and (min-width: 1200px) {
    padding-inline: 16px;
  }
`;

const LogoContainer = styled(Container)`
  margin-bottom: 0;
  margin-top: 0;
  height: 40px;
  order: -2;

  @media screen and (min-width: 600px) {
    flex: 0 0 50%;
    min-width: 50%;
  }
`;

const SocialContainer = styled(Container)`
  display: flex;
  margin-top: 32px;

  @media only screen and (min-width: 600px) {
    margin-top: 56px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    flex: 0 0 33.3333333333%;
    min-width: 33.3333333333%;
  }
`;


const BottomContainer = styled(Container)`
  align-items: center;
  display: flex;
  margin-top: 32px;

  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
    justify-content: flex-end;
    flex: 0 0 50%;
    min-width: 50%;
    flex-grow: 1;
    margin-top: 48px;
  }
`;


const NavigationContainer = styled(Container)`
  margin-top: 8px;

  @media only screen and (min-width: 600px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 1200px) {
    flex: 0 0 66.6666666667%;
    min-width: 66.6666666667%;
  }
`;


const AccordionContainer = styled(Container)`
  margin-top: 24px;

  @media only screen and (min-width: 600px) {
    margin-top: 56px;
    flex: 0 0 50%;
    min-width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    flex: 0 0 25%;
    min-width: 25%;
  }
`;


const SeparatorContainer = styled(Container)`
  margin-top: 56px;

  @media only screen and (min-width: 1200px) {
    padding-inline: 16px;
  }

  div {
    margin-top: 0;
  }

  hr {
    margin: 0;
  }
`;

export { LogoContainer, SocialContainer, BottomContainer, NavigationContainer, AccordionContainer, SeparatorContainer };
