import React, { ReactNode } from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import ImageWrapper from "./Imagewrapper";

type ContentCardProps = {
  title: string;
  src?: string;
  children: ReactNode;
  showActionLink?: boolean;
  showImage?: boolean;
  href?: string;
};

export default function ContentCard({
  title,
  src,
  children,
  showActionLink = false,
  showImage = true,
  href,
}: ContentCardProps) {
  const teaserContent = (
    <Wrapper>
      <ContentWrapper title={title} children={children} showActionLink={showActionLink} />
      {showImage && <ImageWrapper src={src} />}
    </Wrapper>
  );

  return (
    <Container>
      {showActionLink ? (
        <a href={href} target="_blank" rel="noreferrer">
          {teaserContent}
        </a>
      ) : (
        teaserContent
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 0;
  text-decoration: none;

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
  }

  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 14px 24px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  margin-top: 0;
  overflow: hidden;
  width: 100%;
`;
