import React, { ReactNode } from "react";
import styled from "styled-components";
import PictureContainer from "./Picture";
import ImageContainer from "../../layouts/Image";

interface TeaserHeroProps {
  src: string;
  children?: ReactNode;
  className?: string;
}

export default function TeaserHero({
  src,
  children,
  className = "",
}: TeaserHeroProps) {
  return (
    <Container className={`${className}`}>
      <Wrapper>
        <ContentWrapper>
          <Heading>{children}</Heading>
        </ContentWrapper>
        <ImageWrapper>
          <div>
            <PictureContainer>
              <ImageContainer src={src} alt="" />
            </PictureContainer>
          </div>
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  min-width: 551px;
  position: relative;

  @media only screen and (min-width: 1200px) {
    margin-left: calc((1120px - min(100vw - var(--scrollWidth), 1440px)) / 2);
    max-width: unset;
    width: min(100vw - var(--scrollWidth), 1440px);
  }
`;

const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 24px 0 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 1200px) {
    align-items: center;
    margin: 0 calc(50% - 560px);
    width: 1120px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 12px;

  @media only screen and (min-width: 1200px) {
    width: 50%;
    margin-bottom: 16px;
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 0.7496871089;
  bottom: 0;
  margin-left: -24px;
  max-width: calc(100% + 48px);
  position: relative;
  top: 0;
  width: min(100vw - var(--scrollWidth), 1440px);

  & > div {
    height: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
  }
  &::after {
    content: "";
    inset: 0;
    position: absolute;
  }

  @media only screen and (min-width: 1200px) {
    aspect-ratio: 2.3225806452;
    margin: 0;
    max-width: unset;
  }
`;
