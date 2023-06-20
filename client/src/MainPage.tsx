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
                                <TitleParagraph>DRINKABLE's</TitleParagraph>
                                <TitleParagraph marginTop="25px" fontSize="25px" lineHeight="0.5em">- Cocktail Classification -</TitleParagraph>
                            </h1>
                        </div>
                    </Section>
                    <Section marginTop="99px">
                            <AboutTitleBox>
                                <h2>
                                    <TitleParagraph fontSize="46px" lineHeight="1.25em">A special website for introductory cocktails</TitleParagraph>
                                </h2>
                            <TitleParagraph marginTop="55px" fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                                <TitleParagraph marginTop="50px" fontSize="16px" lineHeight="1.7em">
                                    Our website is a space created to introduce cocktails and provide new cocktail experiences.
                                    We provide a variety of cocktail recipes and trendy drink trends to help users freely explore cocktails.
                                    Our goal is to share cocktail culture with cocktail lovers by making it more diverse and exciting.
                                    Our website also provides information on cocktail ingredients.
                                    Welcome to the ultimate destination for cocktail lovers and new discoveries.
                                </TitleParagraph>
                                </AboutTitleBox>
                            <AboutClassificationList>
                                <AboutClassificationItem>
                                    <ClassificationLinkBox>
                                        <AboutTitleBox>
                                            <h2>
                                                <TitleParagraph fontSize="46px" lineHeight="1.25em">The Cocktails</TitleParagraph>
                                            </h2>
                                        </AboutTitleBox>
                                        <TitleParagraph fontSize="16px" lineHeight="1.4em">X</TitleParagraph>
                                        <ClassificationLinkButton to="/flavor">CLASSIFICATION</ClassificationLinkButton>
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
    height: 658px;
    background: #FFFFFF;
    background-image: url(https://static.wixstatic.com/media/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg/v1/fill/w_1289,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_60e2f5a9fac14516a5a44e95c05cc330.jpg);
    background-size: cover;
    background-position: center;
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
    grid-template-rows: 658px 1fr;
    z-index: 1;

    @media (max-width: 768px) {
        padding-top: 8%;
        display: grid;
        justify-content: center;
    }
`;

const Section = styled.section<{ marginTop?:string; alignItems?: string; }>`
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
    font-size: ${(props) => (props.fontSize || "115px")};
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
`;

const AboutClassificationItem = styled.div`
    width: 307px;
    height: 454px;
    background-size: cover;
    background-position: center;

    background-image: url(${(props: { backgroundImage?: string; }) => props.backgroundImage});
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

