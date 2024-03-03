import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import useImageFadeIn from '../../hooks/useImageFadeIn';
import Button from './Button';

type CampaignContainerComponent = {
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  reverseLayout?: boolean;
  rightLayout?: boolean;
  imageSrc: string;
  imageAlt: string;
};

export default function ContainerComponent({
  title,
  content,
  buttonText,
  buttonLink,
  reverseLayout,
  rightLayout,
  imageSrc,
  imageAlt,
}: CampaignContainerComponent) {
  const imageOpacity = useImageFadeIn();

  return (
    <CampaignContainer>
      <CampaignBox reverseLayout={reverseLayout}>
        <ContentBox>
          <h3>{title}</h3>
          <p>{content}</p>
          <ButtonBox>
            <Button href={buttonLink} buttonText={buttonText} />
          </ButtonBox>
        </ContentBox>
        <ImageBox rightLayout={rightLayout}>
          <div>
            <picture>
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                  opacity: imageOpacity,
                  transition: 'opacity .4s ease',
                }}
              />
            </picture>
          </div>
        </ImageBox>
      </CampaignBox>
    </CampaignContainer>
  );
}

ContainerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  reverseLayout: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

ContainerComponent.defaultProps = {
  reverseLayout: false,
};

const CampaignContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 0;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const CampaignBox = styled.div<{ reverseLayout?: boolean }>`
  margin: 0;
  margin-inline: -8px;
  display: flex;
  flex-direction: column;
  flex-wrap: unset;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
    padding: 0;
    align-items: flex-start;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-align: start;

    ${({ reverseLayout }) =>
      reverseLayout &&
      css`
        flex-direction: row-reverse;
        -webkit-box-direction: reverse;
      `}
  }
`;

const ContentBox = styled.div`
  padding: 32px 24px;
  padding-inline: 8px;
  position: relative;
  min-width: 100%;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 100%;
  flex-direction: column;
  z-index: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: start;
  -webkit-box-flex: 0;

  h3 {
    margin: 0;
  }

  p {
    margin: 16px 0 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 14px 18px rgba(0, 0, 0, 0.06);
    z-index: -1;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
    padding: 64px 80px;
    min-width: 50%;
    min-height: 552px;
    flex: 0 0 50%;
    -webkit-box-flex: 0;

    &::before {
      inset: 0 16px;
    }
  }
`;

const ButtonBox = styled.div`
  margin-top: 36px;

  @media only screen and (min-width: 1200px) {
    margin-top: auto;
  }
`;

const ImageBox = styled.div<{ rightLayout?: boolean }>`
  flex: 0 0 100%;
  flex-grow: 1;
  margin-left: 24px;
  margin-top: 80px;
  min-width: 100%;
  padding-inline: 8px;
  padding: 0;
  position: relative;
  width: calc(100vw - 17px);

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      display: block;
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 80px;
    margin-left: unset;
    padding-inline: 16px;
    left: auto;
    right: 8.33333%;
    min-width: 58.33333%;
    flex: 0 0 58.33333%;
    -webkit-box-flex: 0;

    ${({ rightLayout }) =>
      rightLayout &&
      css`
        left: 8.33333%;
      `}

    picture {
      border-radius: 16px;
      overflow: hidden;
    }
  }
`;
