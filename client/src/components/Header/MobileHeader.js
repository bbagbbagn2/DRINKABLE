import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

export default function Mobile() {
    return (
        <Container>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;
    display: grid;
    place-items: center;
    background: #EDEAE3;
    z-index: 999;
`;

const LogoWrapper = styled.div`
    margin: 33.3px 55px;
`;

