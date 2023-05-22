import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';
import { AiOutlineMenu } from "react-icons/ai";

export default function Desktop() {
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <ItemsWrapper>
                    <Items to="/flavor">FLAVOR</Items>
                    <Items to="/amount">AMOUNT</Items>
                    <Items>0%</Items>
                </ItemsWrapper>
                <MobileMenuWrapper>
                <AiOutlineMenu size="27" fill='#8E6C62'/>
                </MobileMenuWrapper>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 65px;
    display: grid;
    align-items: center;
    background: #FFFFFF;
    border-bottom: 2px solid #8E6C62; 
    z-index: 999;
`;

const Wrapper = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 250px 1fr 10%;
    align-items: center;
    justify-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: 250px 1fr;
    }
`;

const LogoWrapper = styled.div``;

const ItemsWrapper = styled.div`
    padding: 0 10%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const Items = styled(Link)`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
    color: #8E6C62;
    font-size: 14px;
    font-weight: medium;
    text-decoration: none;
    letter-spacing: 1.909091px;
    
    &:hover{
        color: #4E3C36;
    }
    
`;

const MobileMenuWrapper = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: grid;
        justify-content: end;
        cursor: pointer;
    }
`