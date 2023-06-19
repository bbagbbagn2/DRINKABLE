import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { setScreenSize } from './utils';

export default function Main(): JSX.Element {
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
                    <BackgroundWrapper />
                    <Wrapper>
                        <TitleWrapper>
                            <div>
                                <Title>DRINKABLE's</Title>
                                <Title marginTop="25px" fontSize="25px" lineHeight="0.5em">
                                    - Cocktail Classification -
                                </Title>
                            </div>
                        </TitleWrapper>
                        <AboutContainer>
                            <AboutWrapper>
                                <AboutTitleWrapper>
                                    <AboutTitle>A special website for introductory cocktails</AboutTitle>
                                </AboutTitleWrapper>
                                <SubTitle marginTop="55px">X</SubTitle>
                                <IntroduceWrapper>
                                    <SubTitle marginTop="50px" lineHeight="1.7em">
                                        Our website is a space created to introduce cocktails and provide new cocktail experiences.
                                        We provide a variety of cocktail recipes and trendy drink trends to help users freely explore cocktails.
                                        Our goal is to share cocktail culture with cocktail lovers by making it more diverse and exciting.
                                        Our website also provides information on cocktail ingredients.
                                        Welcome to the ultimate destination for cocktail lovers and new discoveries.
                                    </SubTitle>
                                </IntroduceWrapper>
                                <AboutImageWrapper>
                                    <ItemWrapper>
                                        <ItemLinkWrapper>
                                            <AboutTitleWrapper>
                                                <AboutTitle>The Cocktails</AboutTitle>
                                            </AboutTitleWrapper>
                                            <SubTitle>X</SubTitle>
                                            <ItmeLink>
                                                MENU
                                            </ItmeLink>
                                        </ItemLinkWrapper>
                                    </ItemWrapper>
                                    <ItemWrapper backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2021/08/Gin-Mojito-001.jpg" />
                                    <ItemWrapper backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003.jpg" />
                                </AboutImageWrapper>
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

    margin-top: ${(props: { marginTop?: string; fontSize?: string; lineHeight?: string; }) => (props.marginTop || "0")};
    font-size: ${(props: { marginTop?: string; fontSize?: string; lineHeight?: string; }) => (props.fontSize || "115px")};
    line-height: ${(props: { marginTop?: string; fontSize?: string; lineHeight?: string; }) => (props.lineHeight || "0.9em")};
`;

const AboutContainer = styled.div`
    margin-top: 99px;
    height: 1100px;
`;

const AboutWrapper = styled.div`
    display: grid;
    justify-items: center;
`;
const AboutTitleWrapper = styled.div`
    margin: 0 38%;
`;

const AboutTitle = styled.h2`
    margin: 0;
    text-align: center;
    line-height: 1.25em;
    font-size: 46px;
    color: #8E6C62;
`;

const SubTitle = styled.p`
    margin: 0;
    text-align: center;
    font-size: 16px;
    color: #8E6C62;
    
    margin-top: ${(props: { marginTop?: string; lineHeight?: string; }) => (props.marginTop || "0")};
    line-height: ${(props: { marginTop?: string; lineHeight?: string; }) => (props.lineHeight || "1.4em")};
`;

const IntroduceWrapper = styled.div`
    margin: 0 30%;
`;

const AboutImageWrapper = styled.div`
    margin-top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`;

const ItemWrapper = styled.div`
    width: 307px;
    height: 454px;
    background-size: cover;
    background-position: center;

    background-image: url(${(props: { backgroundImage?: string; }) => props.backgroundImage});
`;

const ItemLinkWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-top: 1px solid #8E6C62;
    border-bottom: 1px solid #8E6C62;
`;

const ItmeLink = styled.div`
    width: 110px;
    height: 38px;
    display: grid;
    place-items: center;
    background: #8E6C62;
    color: #FFFFFF;
    cursor: pointer;
    transition: ease 0.3s;
    
    &:hover{
        background: #4E3C36;
    }
`;

