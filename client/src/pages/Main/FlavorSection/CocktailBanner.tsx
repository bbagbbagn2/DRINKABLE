import React from 'react';
import styled from 'styled-components';

const BestLink = styled.a`
    position: relative; 
    width: 25%;
    display: inline-block;
    color: #fff;
    background-color: #000;
    font-size: 16px;

    div {
        transition: opacity 1s cubic-bezier(0.4, 0.9, 0.3, 1);
    }
`;

const ImageContainer = styled.div`
    padding: 20px;
    background-color: #e5e5e5;
`;

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.h1`
    color: #000;
`;

type CocktailBannerProps = {
    href: string;
    heading: string;
    imageUrl: string;
};

export default function CocktailBanner({ href, heading, imageUrl }: CocktailBannerProps) {
    return (
        <BestLink href={href}>
            <ImageContainer>
                <ImageBox>
                    <Heading>{heading}</Heading>
                    <img src={imageUrl} alt={heading} />
                </ImageBox>
            </ImageContainer>
        </BestLink>
    );
};  
