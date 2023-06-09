import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { setScreenSize } from './utils';

export default function Main(): JSX.Element {
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
            <MainPageLayout>
                <BackgroundImage />
                <MainPageRow>
                    <Section alignItems="center">
                        <div>
                            <h1>
                                <TitleParagraph>DRINKABLE</TitleParagraph>
                                <TitleParagraph marginTop="25px" fontSize="1.5vw" lineHeight="0.5em">- Cocktail Classification -</TitleParagraph>
                            </h1>
                        </div>
                    </Section>
                    <Section marginTop="99px">
                        <AboutTitleBox>
                            <h2>
                                <TitleParagraph fontSize="46px" lineHeight="1.25em">The Cocktail</TitleParagraph>
                            </h2>
                            <TitleParagraph marginTop="55px" fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                            <TitleParagraph marginTop="50px" fontSize="16px" lineHeight="1.7em">
                                저희 웹사이트는 칵테일을 소개하고 새로운 칵테일 경험을 제공하기 위해 만든 공간입니다.
                                사용자가 자유롭게 칵테일을 검색할 수 있도록 합니다.
                                저희 목표는 칵테일 문화를 더욱 다양하고 흥미롭게 만들어 칵테일 애호가들과 공유하는 것입니다.
                                저희 웹사이트에서는 칵테일 재료에 대한 정보도 제공하고 있습니다.
                                새로운 발견을 위한 최고의 목적지에 오신 것을 환영합니다.
                            </TitleParagraph>
                        </AboutTitleBox>
                        <AboutClassificationList>
                            <AboutClassificationItem>
                                <ClassificationLinkBox>
                                    <AboutTitleBox>
                                        <h2>
                                            <TitleParagraph fontSize="46px" lineHeight="1.25em">DRINKABLE</TitleParagraph>
                                        </h2>
                                    </AboutTitleBox>
                                    <TitleParagraph fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                                    <ClassificationLinkButton to="/classfication">자세히 보기</ClassificationLinkButton>
                                </ClassificationLinkBox>
                            </AboutClassificationItem>
                            <AboutClassificationItem backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2021/08/Gin-Mojito-001.jpg" />
                            <AboutClassificationItem backgroundImage="https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003.jpg" />
                        </AboutClassificationList>
                    </Section>
                </MainPageRow>
            </MainPageLayout>
            <Footer />
        </>
    );
}

const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 33vw;
    background: #FFFFFF;
    background-image: url(https://static.wixstatic.com/media/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg/v1/fill/w_1289,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
`;

const MainPageLayout = styled.div`
    padding-top: 65px;
    display: grid;
    background: #FFFFFF;
`;


const MainPageRow = styled.div`
    padding: 0 6.5%;
    display: grid;
    grid-template-rows: 33vw 1fr;
    z-index: 1;

    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
    }
`;

const Section = styled.section<{ marginTop?: string; alignItems?: string; }>`
    width: 100%;
    display: grid;
    justify-items: center;

    margin-top: ${props => props.marginTop};
    align-items: ${props => props.alignItems};
`;

const TitleParagraph = styled.p<{ marginTop?: string; fontSize?: string; lineHeight?: string; }>`
    margin: 0;
    text-align: center;
    color: #8E6C62;

    margin-top: ${(props) => (props.marginTop || "0")};
    font-size: ${(props) => (props.fontSize || "6vw")};
    line-height: ${(props) => (props.lineHeight || "0.9em")};
`;

const AboutTitleBox = styled.div`
    margin: 0 30%;
`;

const AboutClassificationList = styled.div`
    margin-top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 550px);
        justify-content: center;
    }
`;

const AboutClassificationItem = styled.div<{ backgroundImage?: string; }>`
    width: 307px;
    height: 454px;
    background-size: cover;
    background-position: center;

    background-image: url(${props => props.backgroundImage});
`;

const ClassificationLinkBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-top: 1px solid #8E6C62;
    border-bottom: 1px solid #8E6C62;
`;

const ClassificationLinkButton = styled(Link)`
    width: 150px;
    height: 65px;
    display: grid;
    place-items: center;
    background: #FFFFFF;
    color: #8E6C62;
    border: 1.5px solid #8E6C62;
    cursor: pointer;
    transition: ease 0.2s;
    
    &:hover{
        background: #8E6C62;
        color: #FFFFFF;
    }
`;

