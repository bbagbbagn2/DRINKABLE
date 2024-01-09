import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
<<<<<<< HEAD
        <FooterSection id="footer">
            <FooterBox>
                <FooeterCol>
                    <FooterParagraph>
                        Copyright 2023. DRINKABLE. Powered and secured by Park Jihun
                    </FooterParagraph>
                </FooeterCol>
            </FooterBox>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
    clear: both;

    ::after {
        content: '';
        display: block;
        clear: both;
    }
`;

const FooterBox = styled.div`
    margin: 0 auto;
    padding: 40px;
    position: relative;
    max-width: 1440px;
    color: #9b9b9b;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.025em;
`;

const FooeterCol = styled.div`
    overflow: hidden;
`;
const FooterParagraph = styled.div`
    margin: 0 6.5%;
    color: #FFFFFF;
    text-align: center;
`;
=======
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
>>>>>>> 56431d0937f5869105ea173e3550fa423a7fe3a6
