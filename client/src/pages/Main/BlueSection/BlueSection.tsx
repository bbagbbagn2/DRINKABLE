import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';


export default function BannerSection() {

    return (
        <SessionBox>
            <SessionBoxInner>
                <LeftBox>
                    <CornerBox>
                        <div>
                            <img src='https://www.shakeitdrinkit.com/recette/blue-hawaiian-cocktail-664.png' />
                        </div>
                    </CornerBox>
                </LeftBox>
                <LeftBox>
                    <TextBox>
                        <HeadingBox>BLUE HAWAII</HeadingBox>
                        <DescBox>블루 하와이를 만나보세요</DescBox>
                    </TextBox>
                </LeftBox>
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
        padding: 0;
        width: 100%;
        display: block;
    }

    @media (min-width: 769px) {
        display: block;
    }
`;

const SessionBoxInner = styled.div`
    position: static;
    width: 100%;
    height: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
`;

const LeftBox = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const CornerBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 2;
`;

const HeadingBox = styled.div`
    margin-bottom: 12px;
    border: 1px solid transparent;
    color: #000;
    font-weight: 700;
    font-size: 50px;
    line-height: 1.25;
    letter-spacing: -0.01em;
`;

const DescBox = styled.div`
    margin-bottom: 12px;
    border: 1px solid transparent;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
`