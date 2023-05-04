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
            <Container>
                <Wrapper>
                    <TitleWrapper>
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
        </>
    );
}

const Container = styled.div`            
    position: fixed;
    top: 80px;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    place-items: center;
    background: #EDEAE3;
`;

const Wrapper = styled.div`
    width: 1200px;
    height: 100%;
`;

const TitleWrapper = styled.div`
    padding-top: 160px;
`;
const Title = styled.h1`
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
    height: 50%;
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