import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SvgLogo } from '../logos/logo.svg';

export default function Logo() {
    return (
        <a href="/">
            <Svg />
        </a>
    );
}

const SvgLink = styled.a`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    font-size: .938rem;
    letter-spacing: normal;

    @media screen and (max-width: 60.063rem) {
        height: 1.063rem;
    }
`;

const Svg = styled(SvgLogo)`
    width: 120px;
    max-width: 100%;
    fill: currentColor;
    vertical-align: middle !important;

    :not(:root) {
        overflow: hidden;
    }

    @media screen and (max-width: 37.563rem) {
        margin-bottom: 0.125rem;
        height: 1.063rem;
    }

    @media screen and (min-width: 37.563rem) and (max-width: 60rem) {
        margin-bottom: 0.063rem;
        height: 1.063rem;
    }

`;