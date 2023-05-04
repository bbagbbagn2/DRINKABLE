import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SvgLogo } from '../img/logo.svg';

export default function Logo() {
    return (
        <Link to="/">
            <Svg src={SvgLogo} alt="logo" />
        </Link>
    );
}

const Svg = styled(SvgLogo)``;