import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SectionTitle from '../../../components/SectionTitle';
import { theme } from '../../../styles/theme';

export default function FlavorSection() {
    return (
        <>
            <SectionTitle
                title="Drinks By Flavor"
                desc="칵테일 보러가기"
            />
            <SessionBox>
                <div className='main_best_box'>
                    <BestLink href="/">
                        <ImageContainer>
                            <ImageBox>
                                <Heading>SWEET</Heading>
                                <img src="https://cocktailpartyapp.com/wp-content/uploads/Pina-Colada.webp" />
                            </ImageBox>
                        </ImageContainer>
                    </BestLink>
                    <BestLink href="/">
                        <ImageContainer>
                            <ImageBox>
                                <Heading>DRY</Heading>
                                <img src="https://cocktailpartyapp.com/wp-content/uploads/Martini.webp" />
                            </ImageBox>
                        </ImageContainer>
                    </BestLink>
                    <BestLink href="/">
                        <ImageContainer>
                            <ImageBox>
                                <Heading>SOUR</Heading>
                                <img src="https://cocktailpartyapp.com/wp-content/uploads/Whiskey-Sour.webp" />
                            </ImageBox>
                        </ImageContainer>
                    </BestLink>
                    <BestLink href="/">
                        <ImageContainer>
                            <ImageBox>
                                <Heading>HOT</Heading>
                                <img src="https://cocktailpartyapp.com/wp-content/uploads/Hot-Toddy.webp" />
                            </ImageBox>
                        </ImageContainer>
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

        a:hover {
            div {
                opacity: 0.7;
            }
        }
    }

    @media (min-width: 769px) {
        display: block;
    }
`;

const BestLink = styled.a`
    position: relative; 
    width: 25%;
    display: inline-block;
    color: ${theme.colors.white};
    background-color: #000;
    font-size: 16px;

    div {
        transition: opacity 1s cubic-bezier(0.4, 0.9, 0.3, 1);
    }
`
const Heading = styled.h1`
    color: ${theme.colors.black};
`;

const ImageContainer = styled.div`
    padding: 20px;
    background-color: #e5e5e5;
`;

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`;