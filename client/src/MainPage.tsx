import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <MainPageLayout role="main">
                <div>
                    <PreviewBoard>
                        <MainPageRow>
                            <Section>
                                <TitleLayout>
                                    <TileContainer>
                                        <TitleBox>
                                            <PositionerContainer>
                                                <PositionerBox>
                                                    <DrinkableLayout>
                                                        <DrinkableDescriptionContainer>
                                                            <bdi>
                                                                <DrinkableDescriptionHeading>
                                                                    <DrinkableDescriptionHeadingTitleSpan>DRINKABLE</DrinkableDescriptionHeadingTitleSpan>
                                                                    <br />
                                                                    <DrinkableDescriptionHeadingSpan>나의 완벽한 칵테일을 찾아보세요.</DrinkableDescriptionHeadingSpan>
                                                                </DrinkableDescriptionHeading>
                                                            </bdi>
                                                        </DrinkableDescriptionContainer>
                                                    </DrinkableLayout>
                                                    <DrinkableButtonLayout>
                                                        <DrinkableButtonContainer>
                                                            <DrinkableButtonLink to="/classfication">
                                                                <bdi>
                                                                    <DrinkableButtonSpan>
                                                                        <p>자세히 보기</p>
                                                                    </DrinkableButtonSpan>
                                                                </bdi>
                                                            </DrinkableButtonLink>
                                                        </DrinkableButtonContainer>
                                                    </DrinkableButtonLayout>
                                                </PositionerBox>
                                            </PositionerContainer>
                                            <BackgroundContainer>
                                                <BackgroundBox>
                                                    <picture>
                                                    <BackgroundImage src="https://static.wixstatic.com/media/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg/v1/fill/w_1289,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg" />
                                                    </picture>
                                                </BackgroundBox>
                                            </BackgroundContainer>
                                    </TitleBox>
                                    </TileContainer>
                                </TitleLayout>
                            </Section>
                            <Section>
                                <AboutTitleBox>
                                    <h2>
                                        <TitleParagraph fontSize="46px" lineHeight="1.25em">The Cocktail</TitleParagraph>
                                    </h2>
                                    <TitleParagraph marginTop="55px" fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                                    <TitleParagraph marginTop="50px" fontSize="16px" lineHeight="1.7em">
                                        저희 웹사이트는 칵테일을 소개하고 새로운 칵테일 경험을 제공하기 위해 만든 공간입니다.
                                        사용자가 자유롭게 칵테일을 검색할 수 있도록 합니다.
                                        저희 목표는 칵테일 문화를 더욱 다양하고 흥미롭게 만들어 칵테일 애호가들과 공유하는 것입니다.
                                        저희 웹사이트에서는 칵테일 재료에 대한 정보도 제공하고 있습니다.
                                        새로운 발견을 위한 최고의 목적지에 오신 것을 환영합니다.
                                    </TitleParagraph>
                                </AboutTitleBox>
                                <AboutClassificationList>
                                    <AboutClassificationItem>
                                        <ClassificationLinkBox>
                                            <AboutTitleBox>
                                                <h2>
                                                    <TitleParagraph fontSize="46px" lineHeight="1.25em">DRINKABLE</TitleParagraph>
                                                </h2>
                                            </AboutTitleBox>
                                            <TitleParagraph fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                                            <ClassificationLinkButton to="/classfication">자세히 보기</ClassificationLinkButton>
                                        </ClassificationLinkBox>
                                    </AboutClassificationItem>
                                    <AboutClassificationItem backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2021/08/Gin-Mojito-001.jpg" />
                                    <AboutClassificationItem backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003.jpg" />
                                </AboutClassificationList>
                            </Section>
                        </MainPageRow>
                    </PreviewBoard>
                </div>
            </MainPageLayout>
            <Footer />
        </>
    );
}

const BackgroundImage = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 2880px;
    height: auto;
    display: block;
    aspect-ratio: 3.2;
`;

const MainPageLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 8.75rem);
    background-color: #FFF;
`;

const PreviewBoard = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF;
    font-size: .75rem;
    letter-spacing: normal;
    text-align: center;
`;
const MainPageRow = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    pointer-events: none;

    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
    }
`;

const Section = styled.section`
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const TitleLayout = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;

const TileContainer =styled.div`
    cursor: pointer;
`;

const TitleBox = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column-reverse;
    gap: 0;
    pointer-events: none;
`;

const PositionerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
`;

const PositionerBox = styled.div`
    margin-right: 8.0556%;
    position: relative;
    width: 100%;
    max-width: 40.9722%;
    min-width: 40.9722%;
    height: fit-content;
    scroll-margin-top: 84px;
    pointer-events: all;
`;

const DrinkableLayout = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    pointer-events: none;
`;

const DrinkableDescriptionContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;
const DrinkableDescriptionHeading = styled.h2`
    font-size: .875rem;
    letter-spacing: .8px;
    vertical-align: initial;
`;
const DrinkableDescriptionHeadingTitleSpan = styled.span`
    color: #8E6C62;
`;
const DrinkableDescriptionHeadingSpan = styled.span`
    color: #8E6C62;
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    vertical-align: top;
`;

const DrinkableButtonLayout = styled.div`
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

const DrinkableButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;

const DrinkableButtonLink = styled(Link)`
    margin-top: 1.125rem;
    padding: 0.28125rem 1.3125rem;
    position: relative;
    min-width: 6.0625rem;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #8E6C62;
    border: none;
    color: #FFF;
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: .7px;
    line-height: 1.21875rem;
    transition: color .2s, background-color .2s, border-color .2s;
`;

const DrinkableButtonSpan = styled.span`
    position: relative;
`;

const BackgroundContainer = styled.div`
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const BackgroundBox =styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;
const TitleParagraph = styled.p<{ marginTop?: string; fontSize?: string; lineHeight?: string; }>`
    margin: 0;
    text-align: center;
    color: #8E6C62;

    margin-top: ${(props) => (props.marginTop || "0")};
    font-size: ${(props) => (props.fontSize || "6vw")};
    line-height: ${(props) => (props.lineHeight || "0.9em")};
`;

const AboutTitleBox = styled.div`
    margin: 0 30%;
`;

const AboutClassificationList = styled.div`
    margin-top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 550px);
        justify-content: center;
    }
`;

const AboutClassificationItem = styled.div<{ backgroundImage?: string; }>`
    width: 307px;
    height: 454px;
    background-size: cover;
    background-position: center;

    background-image: url(${props => props.backgroundImage});
`;

const ClassificationLinkBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-top: 1px solid #8E6C62;
    border-bottom: 1px solid #8E6C62;
`;

const ClassificationLinkButton = styled(Link)`
    width: 150px;
    height: 65px;
    display: grid;
    place-items: center;
    background: #FFFFFF;
    color: #8E6C62;
    border: 1.5px solid #8E6C62;
    cursor: pointer;
    transition: ease 0.2s;
    
    &:hover{
        background: #8E6C62;
        color: #FFFFFF;
    }
`;

