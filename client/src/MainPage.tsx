import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import BannerSection from './pages/Main/BannerSection/BannerSection';

export default function Main(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="container">
            <Header />
            <BannerSection />
                <div>
                    <PreviewBoard>
                        <MainPageRow>
                            <DescriptionSection>
                                <DescriptionContainer>
                                    <DescriptionBox>
                                        <AboutTitleBox>
                                            <AboutTitleHeadingBox>
                                                <bdi>
                                                    <AboutTitleHeading>
                                                        <AboutTitleHeadingSpan>베스트 칵테일</AboutTitleHeadingSpan>
                                                    </AboutTitleHeading>
                                                </bdi>
                                            </AboutTitleHeadingBox>
                                        </AboutTitleBox>
                                        <AboutClassificationContainer>
                                            <AboutClassificationBox>
                                                <ClassificationContainer>
                                                    <ClassificationBox>
                                                        <ClassificationList>
                                                            <ClassificationItem>
                                                                <ClassificationLinkLayout>
                                                                    <ClassificationLinkContainer>
                                                                        <ClassificationLinkBox>
                                                                            <Picture>
                                                                                <ClassificationImage src="https://cocktailpartyapp.com/wp-content/uploads/Negroni.webp" />
                                                                            </Picture>
                                                                            <CocktailContainer>
                                                                                <h3>
                                                                                    <CocktailLink to="#">
                                                                                        <bdi>
                                                                                            <CocktailLinkSpan />
                                                                                        </bdi>
                                                                                        <bdi>
                                                                                            <CocktailTitleSpan>네그로니</CocktailTitleSpan>
                                                                                        </bdi>
                                                                                        <div>
                                                                                            <bdi>
                                                                                                <CocktailFlavorSpan>드라이 칵테일</CocktailFlavorSpan>
                                                                                            </bdi>
                                                                                        </div>
                                                                                    </CocktailLink>
                                                                                </h3>
                                                                            </CocktailContainer>
                                                                        </ClassificationLinkBox>
                                                                    </ClassificationLinkContainer>
                                                                </ClassificationLinkLayout>
                                                            </ClassificationItem>
                                                            <ClassificationItem>
                                                                <ClassificationLinkLayout>
                                                                    <ClassificationLinkContainer>
                                                                        <ClassificationLinkBox>
                                                                            <Picture>
                                                                                <ClassificationImage src="https://cocktailpartyapp.com/wp-content/uploads/Old-Fashioned.webp" />
                                                                            </Picture>
                                                                            <CocktailContainer>
                                                                                <h3>
                                                                                    <CocktailLink to="#">
                                                                                        <bdi>
                                                                                            <CocktailLinkSpan />
                                                                                        </bdi>
                                                                                        <bdi>
                                                                                            <CocktailTitleSpan>올드 패션드</CocktailTitleSpan>
                                                                                        </bdi>
                                                                                        <div>
                                                                                            <bdi>
                                                                                                <CocktailFlavorSpan>스위트 칵테일</CocktailFlavorSpan>
                                                                                            </bdi>
                                                                                        </div>
                                                                                    </CocktailLink>
                                                                                </h3>
                                                                            </CocktailContainer>
                                                                        </ClassificationLinkBox>
                                                                    </ClassificationLinkContainer>
                                                                </ClassificationLinkLayout>
                                                            </ClassificationItem>
                                                            <ClassificationItem>
                                                                <ClassificationLinkLayout>
                                                                    <ClassificationLinkContainer>
                                                                        <ClassificationLinkBox>
                                                                            <Picture>
                                                                                <ClassificationImage src="https://cocktailpartyapp.com/wp-content/uploads/Margarita.png" />
                                                                            </Picture>
                                                                            <CocktailContainer>
                                                                                <h3>
                                                                                    <CocktailLink to="#">
                                                                                        <bdi>
                                                                                            <CocktailLinkSpan />
                                                                                        </bdi>
                                                                                        <bdi>
                                                                                            <CocktailTitleSpan>마르가리타</CocktailTitleSpan>
                                                                                        </bdi>
                                                                                        <div>
                                                                                            <bdi>
                                                                                                <CocktailFlavorSpan>사워 칵테일</CocktailFlavorSpan>
                                                                                            </bdi>
                                                                                        </div>
                                                                                    </CocktailLink>
                                                                                </h3>
                                                                            </CocktailContainer>
                                                                        </ClassificationLinkBox>
                                                                    </ClassificationLinkContainer>
                                                                </ClassificationLinkLayout>
                                                            </ClassificationItem>
                                                        </ClassificationList>
                                                    </ClassificationBox>
                                                </ClassificationContainer>
                                            </AboutClassificationBox>
                                        </AboutClassificationContainer>
                                    </DescriptionBox>
                                </DescriptionContainer>
                            </DescriptionSection>
                            <CategorySection>
                                <CategoryContainer>
                                    <CategoryEntry>
                                        <CategoryBoxLayout>
                                            <ContentContainer>
                                                <ContentEntry>
                                                    <ContentEntryLayout>
                                                        <ContentHeadingContainer>
                                                            <ContentHeadingEntry>
                                                                <bdi>
                                                                    <ContentHeadingBox>
                                                                        <ContentHeadingLink to="#">
                                                                            <ContentHeading>Flavor<br /><br /></ContentHeading>
                                                                            <ContentSubtitle>스위트 칵테일</ContentSubtitle>
                                                                        </ContentHeadingLink>
                                                                    </ContentHeadingBox>
                                                                </bdi>
                                                            </ContentHeadingEntry>
                                                        </ContentHeadingContainer>
                                                        <LeftBoxLinkContiner>
                                                            <LeftBoxLinkBox>
                                                                <LeftLinkParagraph>
                                                                    <bdi>
                                                                        <span>
                                                                            자세히 보기
                                                                        </span>
                                                                    </bdi>
                                                                </LeftLinkParagraph>
                                                            </LeftBoxLinkBox>
                                                        </LeftBoxLinkContiner>
                                                    </ContentEntryLayout>
                                                </ContentEntry>
                                            </ContentContainer>
                                            <SweetFlavorBoxLayoutRightContainer>
                                                <SweetFlavorBoxLayoutRightBox>
                                                    <div>
                                                        <FlavorCocktailMainImageContainer>
                                                            <FlavorCocktailMainImageBox>
                                                                <FlavorCocktailPicture>
                                                                    <FlavorCocktailMainImage src="https://ifh.cc/g/KwjG8g.jpg" />
                                                                </FlavorCocktailPicture>
                                                            </FlavorCocktailMainImageBox>
                                                        </FlavorCocktailMainImageContainer>
                                                    </div>
                                                </SweetFlavorBoxLayoutRightBox>
                                            </SweetFlavorBoxLayoutRightContainer>
                                        </CategoryBoxLayout>
                                    </CategoryEntry>
                                </CategoryContainer>
                            </CategorySection>
                            <LongFlavorSection>
                                <LongFlavorContainer>
                                    <LongFlavorBox>
                                        <LongFlavorBoxLayout>
                                            <LongFlavorBoxLayoutLeftContainer>
                                                <ContentEntry>
                                                    <ContentEntryLayout>
                                                        <ContentHeadingContainer>
                                                            <ContentHeadingEntry>
                                                                <bdi>
                                                                    <ContentHeadingBox>
                                                                        <ContentHeadingLink to="#">
                                                                            <ContentHeading>Amount<br /><br /></ContentHeading>
                                                                            <ContentSubtitle>롱 칵테일</ContentSubtitle>
                                                                        </ContentHeadingLink>
                                                                    </ContentHeadingBox>
                                                                </bdi>
                                                            </ContentHeadingEntry>
                                                        </ContentHeadingContainer>
                                                        <LeftBoxLinkContiner>
                                                            <LeftBoxLinkBox>
                                                                <LeftLinkParagraph>
                                                                    <bdi>
                                                                        <span>
                                                                            자세히 보기
                                                                        </span>
                                                                    </bdi>
                                                                </LeftLinkParagraph>
                                                            </LeftBoxLinkBox>
                                                        </LeftBoxLinkContiner>
                                                    </ContentEntryLayout>
                                                </ContentEntry>
                                            </LongFlavorBoxLayoutLeftContainer>
                                            <SweetFlavorBoxLayoutRightContainer>
                                                <SweetFlavorBoxLayoutRightBox>
                                                    <div>
                                                        <FlavorCocktailMainImageContainer>
                                                            <FlavorCocktailMainImageBox>
                                                                <FlavorCocktailPicture>
                                                                    <FlavorCocktailMainImage src="https://ifh.cc/g/ChCyQl.jpg" />
                                                                </FlavorCocktailPicture>
                                                            </FlavorCocktailMainImageBox>
                                                        </FlavorCocktailMainImageContainer>
                                                    </div>
                                                </SweetFlavorBoxLayoutRightBox>
                                            </SweetFlavorBoxLayoutRightContainer>
                                        </LongFlavorBoxLayout>
                                    </LongFlavorBox>
                                </LongFlavorContainer>
                            </LongFlavorSection>
                            <CategorySection>
                                <CategoryContainer>
                                    <CategoryEntry>
                                        <CategoryBoxLayout>
                                            <ContentContainer>
                                                <ContentEntry>
                                                    <ContentEntryLayout>
                                                        <ContentHeadingContainer>
                                                            <ContentHeadingEntry>
                                                                <bdi>
                                                                    <ContentHeadingBox>
                                                                        <ContentHeadingLink to="#">
                                                                            <ContentHeading>Non-Alchholic<br /><br /></ContentHeading>
                                                                            <ContentSubtitle>논알콜 칵테일</ContentSubtitle>
                                                                        </ContentHeadingLink>
                                                                    </ContentHeadingBox>
                                                                </bdi>
                                                            </ContentHeadingEntry>
                                                        </ContentHeadingContainer>
                                                        <LeftBoxLinkContiner>
                                                            <LeftBoxLinkBox>
                                                                <LeftLinkParagraph>
                                                                    <bdi>
                                                                        <span>
                                                                            자세히 보기
                                                                        </span>
                                                                    </bdi>
                                                                </LeftLinkParagraph>
                                                            </LeftBoxLinkBox>
                                                        </LeftBoxLinkContiner>
                                                    </ContentEntryLayout>
                                                </ContentEntry>
                                            </ContentContainer>
                                            <SweetFlavorBoxLayoutRightContainer>
                                                <SweetFlavorBoxLayoutRightBox>
                                                    <div>
                                                        <FlavorCocktailMainImageContainer>
                                                            <FlavorCocktailMainImageBox>
                                                                <FlavorCocktailPicture>
                                                                    <FlavorCocktailMainImage src="https://ifh.cc/g/trK9XV.jpg" />
                                                                </FlavorCocktailPicture>
                                                            </FlavorCocktailMainImageBox>
                                                        </FlavorCocktailMainImageContainer>
                                                    </div>
                                                </SweetFlavorBoxLayoutRightBox>
                                            </SweetFlavorBoxLayoutRightContainer>
                                        </CategoryBoxLayout>
                                    </CategoryEntry>
                                </CategoryContainer>
                            </CategorySection>
                        </MainPageRow>
                    </PreviewBoard>
                </div>
            <Footer />
        </div>
    );
}
const BackgroundImage = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 2880px;
    height: auto;
    display: block;
    aspect-ratio: 3.2;

    @media screen and (max-width: 60.063rem) {
        aspect-ratio: 0.9375;
        max-width: 1500px;
    }
`;

const SessionBox = styled.div`
    position: relative;
    margin: 0 auto 50px;
    max-width: 1440px;

    ::before {
        content: '';
        padding-bottom: 62.5%;
        width: 100%;
        display: block;
    }
    @media (min-width: 769px) {
        display: block;
    }
`;
const MainPageLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 8.75rem);
    background-color: #FFF;
    z-index: 1;

    @media screen and (max-width: 60.063rem) {
        min-height: auto;
    }
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
`;

const TitleSection = styled.section`
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

    @media screen and (max-width: 60.063rem) {
        scroll-margin-top: 70px;
    }

    @media screen and (max-width: 37.563rem) {
        scroll-margin-top: 60px;
    }
`;

const TileContainer = styled.div`
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

    @media screen and (max-width: 60.063rem) {
        gap: 18px;
    }
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

    @media screen and (max-width: 60.063rem) {
        position: static;
        width: auto;
        height: auto;
        justify-content: center;
        z-index: auto;
    }
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

    @media screen and (max-width: 60.063rem) {
        margin: 0;
        max-width: 55.3125%;
        min-width: 55.3125%;
        scroll-margin-top: 70px;
    }

    @media screen and (max-width: 37.563rem) {
        max-width: 89.3333%;
        min-width: auto;
        scroll-margin-top: 60px;
    }
`;

const DrinkableLayout = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    pointer-events: none;

    @media screen and (max-width: 60.063rem) {
        flex: 1 1;    
    }
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

    @media screen and (max-width: 60.063rem) {
        color: #1D1D1D;
    }
`;
const DrinkableDescriptionHeadingSpan = styled.span`
    color: #8E6C62;
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    vertical-align: top;

    @media screen and (max-width: 60.063rem) {
        color: #1D1D1D;
        font-size: 1.5625rem;
        letter-spacing: 1.4px;
        line-height: 2.0625rem;
    }

    @media screen and (max-width: 37.563rem) {
        font-size: 1.25rem;
        letter-spacing: 1px;
        line-height: 1.75rem;
    }
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

    @media screen and (max-width: 60.063rem) {
        scroll-margin-top: 70px;
    }
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

    @media screen and (max-width: 60.063rem) {
        background-color: #1D1D1D;
    }
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

const BackgroundBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;

const DescriptionSection = styled.section`
    margin-top: 8rem;
    padding: 0 0.9722vw;
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 37.563rem) {
        margin-top: 20vw;
        padding: 0 2.5333vw;
    }
`;

const DescriptionContainer = styled.div`
    margin: 0 8.0555%;
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
    
    @media screen and (max-width: 37.563rem) {
        margin: 0;
        max-width: 89.3333%;
        scroll-margin-top: 60px;
    }
`;

const DescriptionBox = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    pointer-events: none;

    @media screen and (max-width: 37.563rem) {
        top: 0;
    }
`;

const AboutTitleBox = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 37.563rem) {
        margin: 0;
        width: auto;
        flex: 1 1;
    }
`;

const AboutTitleHeadingBox = styled.div`
    margin-bottom: 18px;
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;

    @media screen and (max-width: 37.563rem) {
        scroll-margin-top: 60px;    
    }
`;
const AboutTitleHeading = styled.h2`
    font-size: .875rem;
    letter-spacing: .8px;
    line-height: 1.3125rem;

`;
const AboutTitleHeadingSpan = styled.span`
    color: #1D1D1D;
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    text-transform: uppercase;
    vertical-align: top;

    @media screen and (max-width: 37.563rem) {
        font-size: 1.25rem;
        letter-spacing: 1px;
        line-height: 1.75rem;
    }
`;

const AboutClassificationContainer = styled.div`
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const AboutClassificationBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;

    @media screen and (max-width: 37.563rem) {
        scroll-margin-top: 60px;
    }
`;

const ClassificationContainer = styled.div`
    margin: auto;
    position: relative;
    width: 82.9470%;

    @media screen and (max-width: 37.563rem) {
        margin: 0;
        width: auto;
    }
`;

const ClassificationBox = styled.div`
    margin: auto;
    padding: 0 5.2083%;
    position: relative;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 37.563rem) {
        padding: 0;
    }
`;

const ClassificationList = styled.ul`
    margin: 0 auto;
    margin-left: -0.9722vw;
    margin-right: -0.9722vw;
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-start;
    transform: translateX(0%);
`;

const ClassificationItem = styled.li`
    padding-left: 0.9722vw;
    padding-right: 0.9722vw;
    position: relative;
    width: 33.3333%;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    visibility: visible;
`;

const ClassificationLinkLayout = styled.div`
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const ClassificationLinkContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    scroll-margin-top: 84px;
`;

const ClassificationLinkBox = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 30.438rem;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Picture = styled.picture`
    position: absolute;
    top: 2.25rem;
    width: 100%;
`;

const ClassificationImage = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: none;
    height: auto;
    display: block;
`;

const CocktailContainer = styled.div`
    min-height: 322px;
    display: block;
`;

const CocktailLink = styled(Link)`
    padding-top: 2.25rem;
    position: relative;
    width: 100%;
    display: block;
    z-index: 1;
`;

const CocktailLinkSpan = styled.span`
    margin-bottom: 0.9375rem;
    padding-top: 100%;
    display: block;
    width: 100%;
    border-bottom: 4px solid transparent;
    font-size: .875rem;
    letter-spacing: .5px;
    transition: border-color .2s ease-out;

    &:hover {
        border-color: #8E6C62;
    }
`;

const CocktailTitleSpan = styled.span`
    font-size: .875rem;
    letter-spacing: .7px;
    line-height: 1.3125rem;
`

const CocktailFlavorSpan = styled.span`
    margin-top: 0.3125rem;
    position: relative;
    max-height: 1.125rem;
    display: block;
    font-size: .875rem;
    font-weight: 300;
    letter-spacing: .5px;
    overflow: hidden;
`;

const CategorySection = styled.section`
    margin-top: 10.625vw;
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const CategoryContainer = styled.div`
    margin: 0 8.0555%;
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;

    @media screen and (max-width: 37.563rem) {
        margin: 0;
        max-width: 89.3333%;
        scroll-margin-top: 60px;
    }
`;

const CategoryEntry = styled.div`
    cursor: pointer;
`;

const CategoryBoxLayout = styled.div`
    margin: 0 -0.9722vw;
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: unset;
    gap: unset;
    pointer-events: none;

    @media screen and (max-width: 37.563rem) {
        margin: 0;
        flex-direction: column-reverse;
        gap: 18px;
    }
`;

const ContentContainer = styled.div`
    margin-left: 8.3333333%;
    width: 41.6666%;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 37.563rem) {
        margin: 0;
        width: 100%;
    }
`;

const ContentEntry = styled.div`
    position: relative;
    width: 100%;
    min-width: 74.5631%;
    height: fit-content;
    pointer-events: all;

    @media screen and (max-width: 37.563rem) {
        min-width: auto;
    }
`;

const ContentEntryLayout = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    pointer-events: none;
`;

const ContentHeadingContainer = styled.div`
    display: grid;
    display-template-columns: 1fr;
    display-template-rows: 1fr;
    align-items: center;
    justify-content: center;
`;

const ContentHeadingEntry = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
`;

const ContentHeadingBox = styled.h2`
    font-size: .875rem;
    letter-spacing: .8px;
    line-height: 1.3125rem;
`;

const ContentHeadingLink = styled(Link)``;

const ContentHeading = styled.span``;

const ContentSubtitle = styled.span`
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    vertical-align: top;

    @media screen and (max-width: 37.563rem) {
        font-size: 1.25rem;
        letter-spacing: 1px;
        line-height: 1.75rem;
    }
`;

const LeftBoxLinkContiner = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
`;

const LeftBoxLinkBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
`;

const LeftLinkParagraph = styled.p`
    margin-top: 1.125rem;
    padidng-bottom: 0.125rem;
    position: relative;
    display: inline-flex;
    align-items: center;
    background: inherit;
    border: none;
    border-bottom: 1px solid;
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.3125rem;
    transition: border-color 0.2s ease-out;

    &:hover {
        border-color:  #0000;
    }
`;

const SweetFlavorBoxLayoutRightContainer = styled.div`
    padding: 0 0.9722vw;
    width: 41.6666%;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 37.563rem) {
        padding: 0;
        width: 100%;
    }
`;

const SweetFlavorBoxLayoutRightBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
`;

const FlavorCocktailMainImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
`;
const FlavorCocktailMainImageBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
`;

const FlavorCocktailPicture = styled.picture`
    pointer-events: all;
`;

const FlavorCocktailMainImage = styled.img`
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    height: auto;
    display: block;
    aspect-ratio: 0.93913;
`;

const LongFlavorSection = styled(CategorySection)``;

const LongFlavorContainer = styled(CategoryContainer)``;

const LongFlavorBox = styled(CategoryEntry)``;

const LongFlavorBoxLayout = styled(CategoryBoxLayout)`
    flex-direction: row-reverse;

    @media screen and (max-width: 37.563rem) {
        flex-direction: column-reverse;
    }
`;

const LongFlavorBoxLayoutLeftContainer = styled(ContentContainer)`
    margin-left: 0;
    margin-right: 8.3333%;
`;