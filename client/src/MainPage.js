import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { setScreenSize } from './utils';

export default function Main() {
    useLayoutEffect(() => {
        setScreenSize();
    }, []);

    useEffect(() => {
        function handleResize() {
            setScreenSize();
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header />
            <Page>
                <Container>
                <BackgroundWrapper/>
                    <Wrapper>
                        <TitleWrapper>
                            <div>
                                <Title>DRINKABLE's</Title>
                                <Message>- Cocktail Classification -</Message>
                            </div>
                        </TitleWrapper>
                        <AboutContainer>
                            <AboutWrapper>
                                <About>A special website for introductory cocktails</About>
                                <X>X</X>
                                <Introduce>Our website is a space created to introduce cocktails and provide new cocktail experiences. We provide a variety of cocktail recipes and trendy drink trends to help users freely explore cocktails. Our goal is to share cocktail culture with cocktail lovers by making it more diverse and exciting. Our website also provides information on cocktail ingredients. Welcome to the ultimate destination for cocktail lovers and new discoveries.</Introduce>
                            </AboutWrapper>
                        </AboutContainer>
                    </Wrapper>
                </Container>
            </Page>
        </>
    );
}
const Page = styled.div`
    padding-top: 65px;
    width: 100%;
`
const BackgroundWrapper = styled.img`
    position: absolute;
    width: 100%;
    height: 658px;
    background: #FFFFFF;
    background-image: url(https://static.wixstatic.com/media/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg/v1/fill/w_1289,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
`;
const Container = styled.div`
    position: absolute;
    top: 65px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    background: #FFFFFF;
`;


const Wrapper = styled.div`
    padding: 0 6%;
    display: grid;
    grid-template-rows: 658px 1fr;
    z-index: 1;

    @media (max-width: 768px) {
        padding-top: 8%;
        display: grid;
        justify-content: center;
    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 658px;
    display: grid;
    place-items: center;
`;
const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: #8E6C62;
    font-size: 115px;
    line-height: 0.9em;
`;

const Message = styled(Title)`
    margin: 0;
    margin-top: 25px;
    line-height: 0.5em;
    text-align: center;
    font-size: 25px;
`

const AboutContainer = styled.div`
    margin-top: 99px;
    padding: 0 18%;
    height: 1100px;
`;

const AboutWrapper = styled.div`
    display: grid;
    justify-items: center;
`;

const About = styled.h2`
    margin: 0;
    text-align: center;
    line-height: 1.25em;
    font-size: 46px;
    color: #8E6C62;
`;

const X = styled.p`
    margin-top: 54px;
    margin-bottom: 0;
    line-height: 1.4em;
    font-size: 16px;
    color: #8E6C62;
`; 

const Introduce = styled.p`
    margin-top: 49px;
    text-align: center;
    line-height: 1.7em;
    font-size: 16px;
    color: #8E6C62;
`;