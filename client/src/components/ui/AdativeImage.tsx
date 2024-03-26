import React from "react";
import styled from "styled-components";
import PictureContainer from "./Picture";
import ImageContainer from "../../layouts/Image"; 

interface ProjectsListProps {
  href: string;
  alt: string;
  src: string;
}

export default function AdaptiveImage({
  alt,
  src,
  href,
}: ProjectsListProps) {
  return (
    <Container>
      <ImageWrapper>
        <ImageLink href={href}>
          <PictureContainer>
            <ImageContainer
              alt={alt}
              src={src}
            />
          </PictureContainer>
        </ImageLink>
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 32px;
  padding-inline: 8px;
  width: 50%;

  @media only screen and (min-width: 1200px) {
    padding-inline: 16px;
    width: 33.3333333333%;
  }
`;

const ImageWrapper = styled.div`
  height: 0;
  padding-bottom: 100%;
  position: relative;
  width: 100%;

  &::before {
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
    content: "";
    display: block;
    inset: 0;
    position: absolute;
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    box-shadow: 0 14px 24px 0 rgba(0,0,0,.1);
    inset: -8px;
  }
`;

const ImageLink = styled.a`
  inset: 0;
  padding: 32px;
  position: absolute;
`;
