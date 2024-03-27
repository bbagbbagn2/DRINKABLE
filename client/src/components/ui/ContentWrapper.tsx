import React, { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

interface ContentWrapperProps {
  title: string;
  children: ReactNode;
  showActionLink: boolean;
}

export default function ContentWrapper({
  title,
  children,
  showActionLink,
}: ContentWrapperProps) {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <div>
        <Text>{children}</Text>
      </div>
      {showActionLink && (
        <LinkWrapper>
          <p>
            자세히 보기{" "}
            <BsArrowRight size="20" style={{ marginLeft: "10px" }} />
          </p>
        </LinkWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #000;
  background-color: #fff;
  flex-direction: column;
  height: 100%;
  padding: 32px 24px;
  display: flex;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

const Heading = styled.h3`
  margin-bottom: 8px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 16px;
  }
`;

const Text = styled.p`
  margin-bottom: 32px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const LinkWrapper = styled.div`
  margin-top: auto;

  p {
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    height: 24px;
    font: 700 16px / 24px 'Noto Sans KR', 'Montserrat', sans-serif;
    margin-bottom: 0;
    padding: 0;
    width: auto;
  }
`;
