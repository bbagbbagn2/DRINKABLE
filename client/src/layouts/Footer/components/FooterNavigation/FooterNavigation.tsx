import React from "react";
import styled from "styled-components";
import Accordion from "./components/AccordionContainer";
import { NavigationContainer } from "../../Container/FooterContainer";

export default function FooterNavigation() {
  return (
    <NavigationContainer>
      <Wrapper>
        <Accordion title="소 개" href="/about-me" description="About Me" />
        <Accordion
          title="도움이 필요하세요?"
          href="/sitemap"
          description="사이트 맵"
        />
      </Wrapper>
    </NavigationContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;

  @media only screen and (min-width: 600px) {
    margin-inline: -12px;
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;
