import React from "react";
import styled from "styled-components";

import Button from "../../../components/Button";

export default function BannerSection() {
  return (
    <SessionBox>
      <SessionBoxInner>
        <LeftBox>
          <CornerBox>
            <div>
              <img src="https://mariebrizard.com/wp-content/uploads/2023/10/page-cocktails-blue-hawai.png" />
            </div>
          </CornerBox>
        </LeftBox>
        <LeftBox>
          <TextBox>
            <HeadingBox>BLUE HAWAII</HeadingBox>
            <DescBox>꾸준히 사랑받는 블루 하와이를 만나보세요</DescBox>
            <Button href="/" bgColor="#000">
              자세히 보기
            </Button>
          </TextBox>
        </LeftBox>
        <LeftBox>
          <CornerBox>
            <div>
              <img src="https://www.shakeitdrinkit.com/recette/blue-hawaiian-cocktail-664.png" />
            </div>
          </CornerBox>
        </LeftBox>
      </SessionBoxInner>
    </SessionBox>
  );
}

const SessionBox = styled.div`
  position: relative;
  margin: 0 auto 50px;
  max-width: 1440px;

  @media screen and (max-width: 767.98px) {
    margin: 0 auto;
    display: block;
  }

  @media (min-width: 769px) {
    display: block;
  }
`;

const SessionBoxInner = styled.div`
  position: static;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 767.98px) {
    position: relative;
    height: 100%;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    height: calc(41.106vw);
  }

`;

const LeftBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  :not(:first-child) {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    :last-child {
        border-left: 1px solid #000;
    }
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;

    :not(:first-child) {
        border: 0;
        border-bottom: 1px solid #000;

        :last-child {
            border: 0;
            border-bottom: 1px solid #000;
        }
    }
  }
  
`;

const CornerBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 60px;
  display: block;
  min-height: 60px;
  overflow: hidden;

  div {
    position: static;
    width: 100%;
  }
`;

const TextBox = styled.div`
  padding: 4%;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 2;

  @media screen and (max-width: 767.98px) {
    padding: 16px 5%;
    height: 100%;
    min-height: 450px;
  }
`;

const HeadingBox = styled.div`
  margin-bottom: 12px;
  border: 1px solid transparent;
  color: #000;
  font-weight: 700;
  font-size: 50px;
  line-height: 1.25;
  letter-spacing: -0.01em;

  @media screen and (max-width: 767.98px) {
    margin: 0;
    font-size: 28px;
    line-height: 34px;
    border: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-size: calc(30px + 1.25 * (100vw - 767px) / 42.0625);
  }
`;

const DescBox = styled.div`
  margin-bottom: 12px;
  border: 1px solid transparent;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.02em;

  @media screen and (max-width: 767.98px) {
    margin: 24px 0;
    font-weight: 800;
    line-height: 21px;
    border: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-size: calc(30px + 1.25 * (100vw - 767px) / 42.0625);
  }
`;
