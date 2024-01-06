import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';

import banner from '../../../assets/images/background.jpg';

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
                <CornerFull>
                    <CornerBox>
                        <BackgroundImageBox>
                            <img src={banner} />
                        </BackgroundImageBox>
                        <TextBox>
                            <HeadingBox>
                                <DrinkableDescriptionContainer>
                                    DRINKABLE
                                    <br /><br /><br />
                                    <Description>당신의 완벽한 칵테일을 찾아보세요.</Description>
                                </DrinkableDescriptionContainer>
                            </HeadingBox>
                            <ButtonBox>
                                <ButtonLink href="/classfication">
                                    자세히 보기
                                </ButtonLink>
                            </ButtonBox>
                        </TextBox>
                    </CornerBox>
                </CornerFull>
            </SessionBoxInner>
        </SessionBox>

    );
}

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

const SessionBoxInner = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const CornerFull = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media screen and (max-width: 60.063rem) {
        scroll-margin-top: 70px;
    }

    @media screen and (max-width: 37.563rem) {
        scroll-margin-top: 60px;
    }
`;

const CornerBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;

    ::before {
        content: '';
        padding-bottom: 62.5%;
        width: 100%;
        display: block;
    }

    @media screen and (max-width: 60.063rem) {
        gap: 18px;
    }
`;

const BackgroundImageBox = styled.div`
    position: absolute !important;
    inset: 0;

    @media screen and (max-width: 60.063rem) {
        position: static;
        width: auto;
        height: auto;
        justify-content: center;
        z-index: auto;
    }
`;

const TextBox = styled.div`
    padding: 4%;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors.white};
    text-align: right;
    z-index: 2;

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

const HeadingBox = styled.div`
    margin: 50px 0;
    padding-top: 50px;
    position: relative;
    display: flex;
    align-items: center;

    @media screen and (max-width: 60.063rem) {
        flex: 1 1;    
    }
`;

const DrinkableDescriptionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
    font-size: 60px;
`;

const Description = styled.span`
    font-size: 1.875rem;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;

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

const ButtonBox = styled.div`
    border: 1px solid transparent;
    text-align: right;
    color: ${theme.colors.white};
`;

const ButtonLink = styled.a`
    padding: 15px 20px;
    min-width: 180px;
    display: block;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s;

    :hover {
        opacity: 0.6;
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
