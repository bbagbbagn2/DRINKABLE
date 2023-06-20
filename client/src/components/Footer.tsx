import React from 'react';
import styled from 'styled-components';

export default function Footer(): JSX.Element {

    return (
            <FooterLayout>
                <FooterCol>
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
                </FooterCol>
            </FooterLayout>
    );
}


const FooterLayout = styled.footer`
    margin-top: 200px;
    height: 200px;
    background: #8E6C62;
`;

const FooterCol = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 40% repeat(3, 1fr);
    justify-items: space-between;
    justify-items: stretch;
    color: #FFFFFF;

    @media (max-width: 1024px) {
    }
`;