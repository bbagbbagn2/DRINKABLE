import React from "react";
import styled from "styled-components";

import Button from "../../../components/Button";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import main1 from "../../../assets/images/background.jpg";

export default function CampaingnSection() {
  const [targetRefFirst, isVisibleFirst] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  const [targetRefSecond, isVisibleSecond] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  return (
    <main className="container responsivegrid">
      <div className="cmp-container">
        <CampaignCard className="teaser campaign-card content-on-left">
          <div className="cmp-teaser">
            <TeaserContent className="cmp-teaser__content">
              <h3 className="cmp-teaser__title">
                더 나은 식문화를 위한 노력
              </h3>
              <div className="cmp-teaser__description">
                <p>
                  QRLLERGY는 더 안전하고, 건강한 식문화를 추구합니다. 식품 알레르기로 불편함을 겪는 사람들에 긍정적인 변화를 만들기 위해 노력하고 있습니다. 
                </p>
              </div>
              <div className="cmp-teaser__action-container">
                <Button buttonText="자세히 보기"/>
              </div>
            </TeaserContent>
            <TeaserImage className="cmp-teaser__image">
              <div className="cmp-adaptive-image cmp-image">
                <picture ref={targetRefFirst} className={`loaded ${isVisibleFirst && 'visible'}`}>
                  <source srcSet={main1} media="(min-width: 1200px)" width="1280" height="1024" />
                  <Image src={main1} loading="lazy" className="cmp-image__image" itemProp="contentUrl" alt="클라우드 보기" />
                </picture>
              </div>
            </TeaserImage>
          </div>
        </CampaignCard>
        <CampaignCard className="teaser campaign-card content-on-right">
          <div className="cmp-teaser">
            <TeaserContent className="cmp-teaser__content">
              <h3 className="cmp-teaser__title">
                QR코드로 편하게 확인
              </h3>
              <div className="cmp-teaser__description">
                <p>
                QR코드를 스캔하여 알 수 있는 사용자의 식품 알레르기 여부
                </p>
              </div>
              <div className="cmp-teaser__action-container">
                <Button buttonText="자세히 보기"/>
              </div>
            </TeaserContent>
            <TeaserImage className="cmp-teaser__image">
              <div className="cmp-adaptive-image cmp-image">
                <picture ref={targetRefSecond} className={`loaded ${isVisibleSecond && 'visible'}`}>
                  <source srcSet={main1} media="(min-width: 1200px)" width="1280" height="1024" />
                  <Image src={main1} loading="lazy" className="cmp-image__image" itemProp="contentUrl" alt="클라우드 보기" />
                </picture>
              </div>
            </TeaserImage>
          </div>
        </CampaignCard>
      </div>
    </main>
  );
}

const CampaignCard = styled.div`
  margin-top: 56px;
  margin-bottom: 0;
  width: 100%;

  :not(.design-token--disabled) {
    .cmp-teaser {
      color: #000;
    }

    .cmp-teaser__content::before {
      background-color: #fff;
    }

    .cmp-teaser__action-link {
      border-color: #000;
      color: #000;
    }
  }

  & .cmp-teaser {
    display: flex;
    flex-direction: column;
    flex-wrap: unset;
    margin-inline: -8px;
    margin: 0;
  }

  & .cmp-teaser__title {
    margin: 0;
  }

  & .cmp-teaser__description {
    > p{
      margin: 16px 0 0;
    }
  }

  & .cmp-teaser__action-container {
    margin-top: 36px;
  }

  & .content-on-left .cmp-teaser {

  }

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;

    &.content-on-left .cmp-teaser{
        flex-direction: row;

        .cmp-teaser__image {
          left: auto;
          right: 8.333333%;
        }
    }

    .cmp-teaser {
      align-items: flex-start;
      flex-direction: row-reverse;
      margin-inline: -16px;
      padding: 0;
    }

    .cmp-teaser__action-container {
      margin-top: auto;
    }
  }
`;

const TeaserContent = styled.div`
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

  &::before {
    content: "";
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

const TeaserImage = styled.div`
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
      opacity: 0;
      transition: opacity .4s ease;
    }
  }

  picture.loaded.visible img {
    opacity: 1;
  }

  .cmp-adaptive-image {
    picture {
      img {
        display: block;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 80px;
    margin-left: unset;
    padding-inline: 16px;
    left: 8.33333%;
    right: 8.33333%;
    min-width: 58.33333%;
    flex: 0 0 58.33333%;
    -webkit-box-flex: 0;

    picture {
      border-radius: 16px;
      overflow: hidden;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`