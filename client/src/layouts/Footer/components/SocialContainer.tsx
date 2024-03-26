import React from "react";
import styled from "styled-components";
import { SocialContainer } from "../Container/FooterContainer";
import { IoLogoGithub } from "react-icons/io";
import IconWrapper from "../../../components/ui/IconWrapper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
    position: relative;
  }
`;

const IconLink = styled.a`
  padding: 0;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin-top: 0;
  margin-inline: 0 16px;

  @media only screen and (min-width: 1200px) {
    margin-inline: 16px 0;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.12);
    }
  }
`;

export default function Social() {
  return (
    <SocialContainer>
      <Wrapper>
        <IconWrapper>
          <IconLink aria-label="GitHub" target="_blank" href="/">
            <IoLogoGithub />
          </IconLink>
        </IconWrapper>
      </Wrapper>
    </SocialContainer>
  );
}
