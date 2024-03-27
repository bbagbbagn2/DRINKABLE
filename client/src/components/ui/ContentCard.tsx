import React, { ReactNode } from "react";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

interface SkillCardProps {
  title: string;
  src?: string;
  children: ReactNode;
  showActionLink?: boolean;
  showImage?: boolean;
  href?: string;
}

export default function ContentCard({
  title,
  src,
  children,
  showActionLink = false,
  showImage = true,
  href,
}: SkillCardProps) {
  const [targetRef, isVisibleRef] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const teaserContent = (
    <Wrapper>
      <ContentWrapper>
        <Heading>{title}</Heading>
        <div>
          <Text>{children}</Text>
        </div>
        {showActionLink && (
          <div className="cmp-teaser__action-container">
            <p className="cmp-teaser__action-link">
              자세히 보기{" "}
              <BsArrowRight size="20" style={{ marginLeft: "10px" }} />
            </p>
          </div>
        )}
      </ContentWrapper>
      {showImage && (
        <div className="cmp-teaser__image">
          <div className="cmp-adaptive-image cmp-image">
            <picture
              ref={targetRef}
              className={`loaded ${isVisibleRef && "visible"}`}
            >
              <img src={src} loading="lazy" alt="" />
            </picture>
          </div>
        </div>
      )}
    </Wrapper>
  );

  return showActionLink ? (
    <Container>
      <a href={href} target="_blank" rel="noreferrer">
        {teaserContent}
      </a>
    </Container>
  ) : (
    <Container>{teaserContent}</Container>
  );
}

const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 0;

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
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

const ContentWrapper = styled.div`
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
