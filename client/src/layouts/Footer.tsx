import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterLayout>
            Copyright 2023. DRINKABLE. Powered and secured by Park Jihun
        </FooterLayout>
    );
}

const FooterLayout = styled.footer`
    padding: 40px;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    height: 100px;
    background: #000;
    color: #fff;
`;
