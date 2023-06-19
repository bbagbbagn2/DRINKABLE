import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineMenu } from "react-icons/ai";

export default function Desktop() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (height: number) => {
        const targetHeight = height;
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
        setScrollPosition(targetHeight);
    };

    const handleHome = () => { handleScroll(0) };

    const handleAbout = () => { handleScroll(658) };

    return (
        <Container>
            <Wrapper>
                <div onClick={handleHome}>
                    <Logo />
                </div>
                <ItemsWrapper>
                    <Items to="/" onClick={handleHome}>HOME</Items>
                    <Items to="/" onClick={handleAbout}>ABOUT</Items>
                    <Items to="/flavor">FLAVOR</Items>
                    <Items to="/amount">AMOUNT</Items>
                    <Items to="#">0%</Items>
                </ItemsWrapper>
                <MobileMenuWrapper>
                    <AiOutlineMenu size="27" fill='#8E6C62' />
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

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
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
    transition: ease 0.3s;
    
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
`;