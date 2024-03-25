import React, { ReactNode } from "react";
import styled from "styled-components";

type SocialContainerProps = {
  text: string;
  href: string;
  children: ReactNode;
};

export default function SocialContainer({
  text,
  href,
  children,
}: SocialContainerProps) {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <IconLink
            aria-label={text}
            target="_blank"
            rel="noreferrer"
            href={href}
          >
            {children}
          </IconLink>
        </IconWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    margin-inline-start: 56px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a`
  border-color: #fff;
  color: #fff;
  cursor: pointer;
  margin-block: 0;
  height: 40px;
  width: 40px;
  align-items: center;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  padding: 0;
  text-decoration: none;

  @media only screen and (min-width: 1200px) {
    &:hover {
      background-color: hsla(0,0%,100%,.12);
    }
  }
`;
