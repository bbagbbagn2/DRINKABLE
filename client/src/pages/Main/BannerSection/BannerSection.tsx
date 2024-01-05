import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function BannerSection() {
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
        <SessionBox>
            <SessionBoxInner>
            <TitleLayout>
                <TitleBox>
                    <PositionerContainer>
                        <PositionerBox>
                            <DrinkableLayout>
                                <DrinkableDescriptionContainer>
                                    <DrinkableDescriptionHeading>
                                        <DrinkableDescriptionHeadingTitleSpan>DRINKABLE</DrinkableDescriptionHeadingTitleSpan>
                                        <br />
                                        <DrinkableDescriptionHeadingSpan>가장 완벽한 칵테일을 찾아보세요.</DrinkableDescriptionHeadingSpan>
                                    </DrinkableDescriptionHeading>
                                </DrinkableDescriptionContainer>
                            </DrinkableLayout>
                            <DrinkableButtonLayout>
                                <DrinkableButtonContainer>
                                    <DrinkableButtonLink to="/classfication">

                                        <DrinkableButtonSpan>
                                            <p>자세히 보기</p>
                                        </DrinkableButtonSpan>
                                    </DrinkableButtonLink>
                                </DrinkableButtonContainer>
                            </DrinkableButtonLayout>
                        </PositionerBox>
                    </PositionerContainer>
                    <BackgroundContainer>
                        <BackgroundBox>
                            <picture>
                                {windowWidth <= 60.063 * 14 ? (
                                    <BackgroundImage src="https://ifh.cc/g/2HcjXD.jpg" />
                                ) : (
                                    <BackgroundImage src="https://static.wixstatic.com/media/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg/v1/fill/w_1289,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg" />
                                )}
                            </picture>
                        </BackgroundBox>
                    </BackgroundContainer>
                </TitleBox>
            </TitleLayout>
            </SessionBoxInner>
        </SessionBox>

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

    @media (min-width: 769px) {
        display: block;
    }
`;

const SessionBoxInner = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
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

const TitleBox = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
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
    color: #1D1D1D;
`;
const DrinkableDescriptionHeadingSpan = styled.span`
    color: #1D1D1D;
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    vertical-align: top;

    @media screen and (max-width: 60.063rem) {
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
    background-color: #1D1D1D;
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
