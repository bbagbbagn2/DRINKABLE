import React from "react";
import styled from "styled-components";
import PictureContainer from "./Picture";
import ImageContainer from "../../layouts/Image";

type ImageWrapperProps = {
  src?: string;
};

export default function ImageWrapper({ src }: ImageWrapperProps) {
  return (
    <Wrapper>
      <div>
        <PictureContainer>
          <ImageContainer src={src} alt="" />
        </PictureContainer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
