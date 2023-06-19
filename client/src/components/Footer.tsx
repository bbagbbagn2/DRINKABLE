import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineMenu } from "react-icons/ai";

export default function Footer() {

    return (
            <Container>
                <Wrapper>
                    <div>
                    <h1>DRINKABLE</h1>
                    <p>© 2023 By DRINKABLE. Powered and secured by Jihun</p>
                    </div>
                    <div>
                        <ul>Flavor</ul>
                        <li>Dry</li>
                        <li>Sour</li>
                        <li>Sweet</li>
                        <li>Hot</li>
                    </div>
                    <div>
                        <ul>Amount</ul>
                        <li>Long</li>
                        <li>Short</li>
                    </div>
                    <div>
                        <ul>non-alchoholic</ul>
                        <li>non-alchoholic</li>
                    </div>
                </Wrapper>
            </Container>
    );
}


const Container = styled.article`
    height: 20vw;
    background: #8E6C62;
`;

const Wrapper = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 40% repeat(3, 1fr);
    justify-items: space-between;
    justify-items: stretch;
    color: #FFFFFF;

    @media (max-width: 1024px) {
    }
`;

const ItemsWrapper = styled.div`
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