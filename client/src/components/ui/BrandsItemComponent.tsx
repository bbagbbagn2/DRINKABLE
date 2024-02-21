import React from 'react';
import styled from 'styled-components';

type Brand = {
  name: string;
  siteName: string | null;
  image: string | null;
};

export default function LocationItemComponent({ brand }: { brand: Brand }) {
  return (
    <LocationItem>
      <AdapativeImage>
        <ImageLink href="/">
          <picture>
            {brand.image && <img src={brand.image} alt={brand.name} />}
          </picture>
        </ImageLink>
      </AdapativeImage>
    </LocationItem>
  );
}

const LocationItem = styled.div`
  margin-top: 32px;
  padding-inline: 8px;
  width: 50%;

  @media only screen and (min-width: 1200px) {
    padding-inline: 16px;
    width: 33.333333%;
  }
`;

const AdapativeImage = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  height: 0;

  &::before {
    background-color: #fafafa;
    border-radius: 16px;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
    content: '';
    display: block;
    inset: 0;
    position: absolute;
    transition: all 0.2s ease-out;
  }

  @media only screen and (min-width: 1200px) {
    &:hover::before {
      inset: -8px;
      box-shadow: 0 14px 24px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

const ImageLink = styled.a`
  padding: 24px;
  position: absolute;
  inset: 0;

  @media only screen and (min-width: 1200px) {
    padding: 32px;
  }

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-style: none;
      transition: none;
      opacity: 1;
    }
  }
`;
