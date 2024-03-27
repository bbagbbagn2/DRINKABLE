import React, { ReactNode } from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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
      <ContentWrapper title={title} children={children} showActionLink />
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
