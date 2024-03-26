import React from "react";
import styled from "styled-components";
import Text from "./Text";
import SocialContainer from "./SocialContainer";

import { IoLogoGithub } from "react-icons/io";

type GitHubCardProps = {
  text: string;
  href: string;
};

export default function GitHubCard({ text, href }: GitHubCardProps) {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h2 className="heading">GitHub에서 {text} 개발 정보를 확인하세요</h2>
        </Text>
        <SocialContainer text="GitHub" href={href}>
          <IoLogoGithub size="24" />
        </SocialContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 16px;
  margin-top: 56px;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }

  .heading {
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 24px;

  @media only screen and (min-width: 1200px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 48px 96px;
  }
`;
