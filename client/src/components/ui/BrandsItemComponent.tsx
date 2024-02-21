import React from 'react';
import styled from 'styled-components';

export default function LocationItemComponent() {
  return (
    <LocationItem className='adaptiveImage image'>
      <AdapativeImage className='cmp-adaptive-image cmp-image'>
        <a href="/" className='cmp-image__link'>
          <picture>
            <img loading='lazy' className='cmp-image__image' itemProp='contentUrl' alt='' src='' />
          </picture>
        </a>
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
  &.cmp-adaptive-image picture {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    background: none;

    img {
      display: block;
      opacity: 1;
      transition: none;

      &.cmp-image__image {
        width: 100%;
      }
    }
  }
`;