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
            <Footer />
        </>
    );
}

const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 33vw;
    background: #FFFFFF;
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

