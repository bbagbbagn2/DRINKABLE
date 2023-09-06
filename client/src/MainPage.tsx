import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Classification from './ClassificationPage';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <MainPageLayout role="main">
                <div>
                    <PreviewBoard>
                        <MainPageRow>
                            <TitleSection>
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
                            </TitleSection>
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
                            <SweetFlavorSection>
                                <SweetFlavorContainer>
                                    <SweetFlavorBox>
                                        <SweetFlavorBoxLayout>
                                            <SweetFlavorBoxLayoutLeftContainer>
                                                <SweetFlavorBoxLayoutLeftBox>
                                                    <LeftBoxLayout>
                                                        <LeftBoxLayoutHeadingContainer>
                                                            <LeftBoxLayoutHeadingBox>
                                                                <bdi>
                                                                    <LeftBoxLayoutHeading>
                                                                        <LeftBoxLayoutHeadingLink to="#">
                                                                            <LeftBoxLayoutHeadingSpan>Flavor<br /><br /></LeftBoxLayoutHeadingSpan>
                                                                            <LeftBoxLayoutSpan>스위트 칵테일</LeftBoxLayoutSpan>
                                                                        </LeftBoxLayoutHeadingLink>
                                                                    </LeftBoxLayoutHeading>
                                                                </bdi>
                                                            </LeftBoxLayoutHeadingBox>
                                                        </LeftBoxLayoutHeadingContainer>
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
                                                    </LeftBoxLayout>
                                                </SweetFlavorBoxLayoutLeftBox>
                                            </SweetFlavorBoxLayoutLeftContainer>
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
                                        </SweetFlavorBoxLayout>
                                    </SweetFlavorBox>
                                </SweetFlavorContainer>
                            </SweetFlavorSection>
                            <LongFlavorSection>
                                <LongFlavorContainer>
                                    <LongFlavorBox>
                                        <LongFlavorBoxLayout>
                                            <LongFlavorBoxLayoutLeftContainer>
                                            <SweetFlavorBoxLayoutLeftBox>
                                                    <LeftBoxLayout>
                                                        <LeftBoxLayoutHeadingContainer>
                                                            <LeftBoxLayoutHeadingBox>
                                                                <bdi>
                                                                    <LeftBoxLayoutHeading>
                                                                        <LeftBoxLayoutHeadingLink to="#">
                                                                            <LeftBoxLayoutHeadingSpan>Amount<br /><br /></LeftBoxLayoutHeadingSpan>
                                                                            <LeftBoxLayoutSpan>롱 칵테일</LeftBoxLayoutSpan>
                                                                        </LeftBoxLayoutHeadingLink>
                                                                    </LeftBoxLayoutHeading>
                                                                </bdi>
                                                            </LeftBoxLayoutHeadingBox>
                                                        </LeftBoxLayoutHeadingContainer>
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
                                                    </LeftBoxLayout>
                                                </SweetFlavorBoxLayoutLeftBox>
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
                            <SweetFlavorSection>
                                <SweetFlavorContainer>
                                    <SweetFlavorBox>
                                        <SweetFlavorBoxLayout>
                                            <SweetFlavorBoxLayoutLeftContainer>
                                                <SweetFlavorBoxLayoutLeftBox>
                                                    <LeftBoxLayout>
                                                        <LeftBoxLayoutHeadingContainer>
                                                            <LeftBoxLayoutHeadingBox>
                                                                <bdi>
                                                                    <LeftBoxLayoutHeading>
                                                                        <LeftBoxLayoutHeadingLink to="#">
                                                                            <LeftBoxLayoutHeadingSpan>Non-Alchholic<br /><br /></LeftBoxLayoutHeadingSpan>
                                                                            <LeftBoxLayoutSpan>논알콜 칵테일</LeftBoxLayoutSpan>
                                                                        </LeftBoxLayoutHeadingLink>
                                                                    </LeftBoxLayoutHeading>
                                                                </bdi>
                                                            </LeftBoxLayoutHeadingBox>
                                                        </LeftBoxLayoutHeadingContainer>
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
                                                    </LeftBoxLayout>
                                                </SweetFlavorBoxLayoutLeftBox>
                                            </SweetFlavorBoxLayoutLeftContainer>
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
                                        </SweetFlavorBoxLayout>
                                    </SweetFlavorBox>
                                </SweetFlavorContainer>
                            </SweetFlavorSection>
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
`;

const DescriptionContainer = styled.div`
    margin: 0 8.0555%;
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;

const DescriptionBox = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1 0;
    flex-direction: column;
    pointer-events: none;
`;

const AboutTitleBox = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
`;

const AboutTitleHeadingBox = styled.div`
    margin-bottom: 18px;
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
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
`;

const ClassificationContainer = styled.div`
    margin: auto;
    position: relative;
    width: 82.9470%;
`;

const ClassificationBox = styled.div`
    margin: auto;
    padding: 0 5.2083%;
    position: relative;
    height: 100%;
    overflow: hidden;
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

const SweetFlavorSection = styled.section`
    margin-top: 10.625vw;
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
`;

const SweetFlavorContainer = styled.div`
    margin: 0 8.0555%;
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: fit-content;
    pointer-events: all;
    scroll-margin-top: 84px;
`;

const SweetFlavorBox = styled.div`
    cursor: pointer;
`;

const SweetFlavorBoxLayout = styled.div`
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
`;

const SweetFlavorBoxLayoutLeftContainer = styled.div`
    margin-left: 8.3333333%;
    width: 41.6666%;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
`;

const SweetFlavorBoxLayoutLeftBox = styled.div`
    position: relative;
    width: 100%;
    min-width: 74.5631%;
    height: fit-content;
    pointer-events: all;
`;

const LeftBoxLayout = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    pointer-events: none;
`;

const LeftBoxLayoutHeadingContainer = styled.div`
    display: grid;
    display-template-columns: 1fr;
    display-template-rows: 1fr;
    align-items: center;
    justify-content: center;
`;

const LeftBoxLayoutHeadingBox = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: all;
`;

const LeftBoxLayoutHeading = styled.h2`
    font-size: .875rem;
    letter-spacing: .8px;
    line-height: 1.3125rem;
`;

const LeftBoxLayoutHeadingLink = styled(Link)``;

const LeftBoxLayoutHeadingSpan = styled.span``;

const LeftBoxLayoutSpan = styled.span`
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    vertical-align: top;
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

const LongFlavorSection = styled(SweetFlavorSection)``;

const LongFlavorContainer = styled(SweetFlavorContainer)``;

const LongFlavorBox = styled(SweetFlavorBox)``;

const LongFlavorBoxLayout = styled(SweetFlavorBoxLayout)`
    flex-direction: row-reverse;
`;

const LongFlavorBoxLayoutLeftContainer = styled(SweetFlavorBoxLayoutLeftContainer)`
    margin-left: 0;
    margin-right: 8.3333%;
`;