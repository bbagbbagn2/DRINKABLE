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
                        <LinkContainer>
                            <LinkWrapper>
                                <LinkMessage>Cocktail's Title</LinkMessage>
                            </LinkWrapper>
                        </LinkContainer>
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
    width: 100vw;
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
    align-content: stretch;
    z-index: 1;

    @media (max-width: 768px) {
        padding-top: 8%;
        display: grid;
        align-content: stretch;
        justify-items: center;
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
    color: #8E6C62;
    font-size: 125px;
    line-height: 0.9em;
`;

const Message = styled(Title)`
    margin: 0;
    margin-top: 25px;
    line-height: 0.5em;
    text-align: center;
    font-size: 25px;
`
const LinkContainer = styled.div`
    display: grid;
    place-content: end;
`;

const LinkWrapper = styled.div`
    width: 384px;
    height: 384px;
    display: grid;
    place-items: center;
    background: #8E6C62;
    cursor: pointer;
`;

const LinkMessage = styled(Message)`
    font-size: 42px;
    color: #EDEAE3;
`;