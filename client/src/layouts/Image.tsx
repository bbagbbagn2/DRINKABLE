import React from "react";
import styled from "styled-components";

type ImageContainerProps = {
  src?: string;
  alt: string;
};

export default function ImageContainer({ src, alt }: ImageContainerProps) {
  return <Image src={src} loading="lazy" alt={alt} itemProp="contentUrl" />;
}

const Image = styled.img`
  display: block;
  width: 100%;
`;

const FooterImage = styled(Image)`
  height: 100%;
  width: auto;
`;

const HeaderImage = styled(Image)`
  height: auto;
  max-width: 125px;
`;

export { HeaderImage, FooterImage };
