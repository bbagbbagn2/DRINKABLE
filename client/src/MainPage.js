import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";

export default function Main() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    return (<>
        <Header />
        <MainPage>
            <RecommendContainer>
                <RecommendWrapper>
                    <RecommendTitle>DRINKABLE's</RecommendTitle>
                    <RecommendMessage>Recommended</RecommendMessage>
                    <RecommendMessage>Cocktail</RecommendMessage>
                    <LinkContainer>
                    <LinkWrapper>
                    <LinkMessage>Cocktail's Title</LinkMessage>
                        </LinkWrapper>
                    </LinkContainer>
                </RecommendWrapper>
            </RecommendContainer>
        </MainPage>
    </>)
}

const MainPage = styled.div`
    position: absolute;
    top: 81px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
`;

const RecommendContainer = styled.div`
    width: 100vw;
    height: 793px;
    
    background: #EDEAE3;
`;

const RecommendWrapper = styled.div`
    position: relative;
    top: 150px;
    width: auto;
    height: 793px;
    margin: 0 360px 0 360px; 

    z-index: 0;
`;

const RecommendTitle = styled.h1`
    position: relative;
    margin-bottom: 0;
    margin-left: 0;
    font-size: 28px;
    font-weight: 600;
`;

const RecommendMessage = styled(RecommendTitle)`
    font-size: 65px;
    margin: 0;
`

const LinkContainer = styled.div`
    margin-top: 48px;
    display: grid;
    place-content: end;
    align-items: end;
`;

const LinkWrapper = styled.div`
    width: 384px;
    height: 384px;

    display: grid;
    place-items: center;

    background: #8E6C62;

    cursor: pointer;
`;

const LinkMessage = styled(RecommendMessage)`
    margin: 20px;

    font-size: 42px;
    color: #EDEAE3;
`;