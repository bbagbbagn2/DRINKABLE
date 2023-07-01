import React from 'react';
import styled from 'styled-components';

export default function Footer(): JSX.Element {

    return (
            <FooterLayout>
                <FooterParagraph>
                    Copyright 2023. DRINKABLE. Powered and secured by Park Jihun
                </FooterParagraph>
            </FooterLayout>
    );
}


const FooterLayout = styled.footer`
    display: grid;
    place-items: center;    
    margin-top: 200px;
    height: 80px;
    background: #8E6C62;
`;

const FooterParagraph = styled.div`
    margin: 0 6.5%;
    color: #FFFFFF;
    text-align: center;
`;