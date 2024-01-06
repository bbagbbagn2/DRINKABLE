import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SectionTitle from '../../../components/SectionTitle';
import { theme } from '../../../styles/theme';

export default function FlavorSection() {
    return (
        <>
            <SectionTitle
                title="By Flavor"
                desc="칵테일 보러가기"
            />
            <SessionBox>
                <div className='main_best_box'>
                    <BestLink href="/">

                    </BestLink>
                </div>
            </SessionBox>
        </>
    );
}

const SessionBox = styled.div`
    margin: 0 auto 50px;
    position: relative;
    max-width: 1440px;

    .main_best_box {
        font-size: 0;
    }

    @media (min-width: 769px) {
        display: block;
    }
`;

const BestLink = styled.a`
    position: relative;
    width: 25%;
    display: inline-block;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: 16px;

    img {
        transition: opacity 1s cubic-bezier(0.4, 0.9, 0.3, 1);
    }
`