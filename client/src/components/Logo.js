import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SvgLogo } from '../assets/image/logo.svg'    ;

export default function Logo() {
    return (
        <SvgLink to="/">
            <Svg src={SvgLogo} alt="logo" />
        </SvgLink>
    );
}

const SvgLink = styled(Link)`
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
    margin: 0 auto;
    width: auto;
    height: 1.75rem;
    display: inline-block;
    font-size: .938rem;

    @media screen and (min-width: 37.563rem) and (max-width: 60rem) {
        margin-bottom: 0.063rem;
        height: 1.063rem;
    }

    @media screen and (max-width: 37.563rem) {
        margin-bottom: 0.125rem;
        height: 1.063rem;
    }
`;