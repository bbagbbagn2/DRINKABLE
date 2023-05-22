import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';

export default function Desktop() {
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <MenuWrapper>
                    <MenuItems to="/flavor">FLAVOR</MenuItems>
                    <MenuItems to="/amount">AMOUNT</MenuItems>
                    <MenuItems>0%</MenuItems>
                </MenuWrapper>
                <div />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    display: grid;
    align-items: center;
    background: #EDEAE3;
    z-index: 999;
`;

const Wrapper = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 250px 1fr 10%;
    align-items: center;
    justify-items: stretch;
`;

const LogoWrapper = styled.div`
`;

const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
`;

const MenuItems = styled(Link)`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
    color: black;
    font-size: 15px;
    font-weight: medium;
    letter-spacing: 1.909091px;
    text-decoration: none;
    
    &:hover{
        color: #8E6C62;
    }
    
`;