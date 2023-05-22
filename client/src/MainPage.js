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

const Container = styled.div`       
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    background: #FFFFFF;
`;

const Wrapper = styled.div`
    padding: 0 6%;
    display: grid;
    align-content: stretch;

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
    margin-top: 160px;
    margin-bottom: 0;
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