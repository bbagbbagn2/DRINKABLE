import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';

export default function Desktop() {
    return (
        <Container>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <MenuWrapper>
                    <MenuItems to="/flavor">FLAVOR</MenuItems>
                    <MenuItems to="/amount">AMOUNT</MenuItems>
                    <MenuItems>0%</MenuItems>
                </MenuWrapper>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;
    display: grid;
    grid-template-columns: 300px 62% 19%;
    place-items: center;
    background: #EDEAE3;
    z-index: 999;
`;


const LogoWrapper = styled.div`
    margin: 33.3px 55px;
`;

const MenuWrapper = styled.div`
    margin: 0 306px;
    height: 100%;    
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
    font-size: 25px;
    text-decoration: none;
    
    &:hover{
        color: #8E6C62;
        border-bottom: 2px solid #8E6C62;
    }
    
`;
//맛(술, 리프레싱, 프루트, 스위트, 스무디, 핫), 용량(많은, 작은), 무알콜