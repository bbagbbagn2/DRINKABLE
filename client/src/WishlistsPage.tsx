import React from 'react';
import styled from 'styled-components';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <MainLayout role="main">
                <MainBox>
                    <Container>
                        <ContextBox>
                            <ContextHeading>위시리스트 생성하기</ContextHeading>
                            <ContextParagraph>위시리스트가 비어있습니다.</ContextParagraph>
                        </ContextBox>
                    </Container>
                </MainBox>
            </MainLayout>
            <Footer />
        </>
    );
}

const MainLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 85px);
    background-color: #FFF;

    @media screen and (max-width: 60.063rem) {
        min-height: calc(100vh - 15rem);
    }
`;
const MainBox = styled.div``;

const Container = styled.div`
    margin: 0 auto;
    padding: 0 8.0555%;
    max-width: 83.875rem;
    overflow: hidden;
    box-sizing: initial;

    @media screen and (max-width: 60.063rem) {
        margin-top: 5vw;
    }
    
    @media screen and (max-width: 37.563rem) {
        margin-top: 14.4vw;
    }
`;

const ContextBox = styled.div`
    text-align: center;
`;
const ContextHeading = styled.h1`
    margin: 0;
    margin-top: 5vw;
    margin-bottom: 1.125rem;
    padding: 0;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;

    @media screen and (max-width: 60.063rem) {
        font-size: 1.875rem;
        line-height: 1.2;
    }

    @media screen and (max-width: 37.563rem) {
        font-size: 1.563rem;
        letter-spacing: normal;
        line-height: 1.24;
    }
`;
const ContextParagraph = styled.p`
    margin: 0;
    margin-top: 1.125rem;
    padding: 0;
    letter-spacing: .03125rem;
    line-height: 1.125;rem
`;