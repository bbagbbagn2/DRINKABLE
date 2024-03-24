import React from "react";
import styled from "styled-components";
import { SocialContainer } from "../Container/FooterContainer";
import { IoLogoGithub } from "react-icons/io";

export default function Social() {
  return (
    <SocialContainer>
      <Wrapper>
        <LinkWrapper>
          <Link
            className="cmp-button"
            rel="noreferrer"
            aria-label="github"
            target="_blank"
            href="https://github.com/bbagbbagn2"
          >
            <IoLogoGithub />
          </Link>
        </LinkWrapper>
      </Wrapper>
    </SocialContainer>
  );
}

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

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 48px;
  color: #fff;
  display: flex;
  height: 32px;
  justify-content: center;
  margin-top: 0;
  margin-inline: 0 16px;
  padding: 0;
  text-decoration: none;
  width: 32px;

  @media only screen and (min-width: 1200px) {
    margin-inline: 16px 0;

    &:hover {
        background-color: hsla(0,0%,100%,.12);
    }
  }
`;
