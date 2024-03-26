import React, { ReactNode } from "react";
import styled from "styled-components";
import IconWrapper from "./IconWrapper";

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
          <Link aria-label={text} target="_blank" rel="noreferrer" href={href}>
            {children}
          </Link>
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

const Link = styled.a`
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
  margin-block: 0;
  height: 40px;
  width: 40px;

  @media only screen and (min-width: 1200px) {
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.12);
    }
  }
`;
