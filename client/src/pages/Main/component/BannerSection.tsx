import React from "react";
import styled from "styled-components";

import Button from "../../../components/ui/Button";
import Main from '../../../components/ui/Main';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import main1 from "../../../assets/images/background.jpg";

export default function BannerSection() {
  const [targetRefFirst, isVisibleFirst] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <Main>
      <div className="cmp-container">
        <TeaserHero className="teaser hero">
          <div className="cmp-teaser">
            <TeaserContent className="cmp-teaser__content">
                <h1 className="cmp-teaser__title">결과와 과정을 생각하는<br/>박지훈입니다.</h1>
            </TeaserContent>
            <TeaserImage className="cmp-teaser__image">
                <div className="cmp-adaptive-image cmp-image">
                    <picture ref={targetRefFirst} className={`${isVisibleFirst && 'loaded visible'}`}>
                        <img src={main1} loading="lazy" className="cmp-image__image" itemProp="contentUrl" alt="" />
                    </picture>
                </div>
            </TeaserImage>
          </div>
        </TeaserHero>
      </div>
    </Main>
  );
}

const TeaserHero = styled.div`
  &.hero {
    position: relative;

    .cmp-teaser {
      height: 100%;
      margin: 0 auto;
      max-width: 551px;
      position: relative;
    }

    .cmp-teaser__title {
        margin-bottom: 16px;
    }

    .cmp-teaser__image {
        img {
            height: 100%;
            object-fit: cover;
        }
    }

    @media only screen and (min-width: 1200px) {
      .cmp-teaser {
        margin-left: 24px;
        max-width: unset;
        width: min(100vw - var(--scrollWidth), 1440px);
      }

      .cmp-teaser__title {
        margin-bottom: 16px;
      }
    }

    @media only screen and (min-width: 1200px) and (min-width: 1200px) {
      .cmp-teaser {
        margin-left: calc(
          (1120px - min(100vw - var(--scrollWidth), 1440px)) / 2
        );
      }
    }
  }
`;

const TeaserContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 24px 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
    color: #fff;

  @media only screen and (min-width: 1200px) {
    align-items: center;
    margin: 0 calc(50% - 560px);
    width: 1120px;

    & > * {
        width: 50%;
    }
  }
`;

const TeaserImage = styled.div`
    aspect-ratio: .7496871089;
    bottom: 0;
    margin-left: 24px;
    max-width: calc(100% + 48px);
    position: relative;
    top: 0;
    width: min(100vw - var(--scrollWidth),1440px);

    .cmp-image {
        height: 100%;
    }

  @media only screen and (min-width: 1200px) {
    aspect-ratio: 2.3225806452;
    margin: 0;
    max-width: unset;
  }
`;

const Image = styled.img`
  width: 100%;
`;
