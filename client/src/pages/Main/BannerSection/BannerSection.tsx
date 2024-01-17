import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';
import Button from '../../../components/Button';
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
                            <Button href='/classification' bgColor='#fff'>
                                자세히 보기
                            </Button>
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
`;

const BackgroundImageBox = styled.div`
    position: absolute !important;
    inset: 0;
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

    @media screen and (max-width: 767.98px) {
        display: none;
    }
`;

const HeadingBox = styled.div`
    margin: 50px 0;
    padding-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
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
`;