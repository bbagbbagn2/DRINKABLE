import React from 'react';
import styled from 'styled-components';

import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

export default function Logout() {
    return (
        <>
            <Header />
            <MainLayout>
                <MainBox>
                    <LogOutPageBox>
                        <ContextBox>
                            <ContextH1>로그아웃 완료</ContextH1>
                            <ContextParagraph>계정에서 로그아웃하셨습니다.</ContextParagraph>
                        </ContextBox>
                    </LogOutPageBox>
                </MainBox>
            </MainLayout>
            <Footer />
        </>
    );
}

const MainLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 8.75rem);

    @media screen and (max-width: 60.063rem) {
        min-height: calc(100vh - 15rem);
    }
`;
const MainBox = styled.div``;

const LogOutPageBox = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 1.125rem;
    width: 100%;

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
const ContextH1 = styled.h1`
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
    margin-top: .875rem;
    letter-spacing: .006rem;
    line-height: 1.75;
`;