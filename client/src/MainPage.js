import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
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
            <Page className='MainPage'>
                <Container className='Container'>
                    <Wrapper className='Wrapper'>
                        <TitleWrapper className='TitleWrapper'>
                            <Title>DRINKABLE's</Title>
                            <Message>Cocktail</Message>
                            <Message>Classification</Message>
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
    width: 100%;
`

const Container = styled.div`       
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    background: #EDEAE3;
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
    padding-top: 13%;
`;
const Title = styled.p`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 0;
    margin-left: 0;
`;

const Message = styled(Title)`
    font-size: 65px;
    margin: 0;    
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