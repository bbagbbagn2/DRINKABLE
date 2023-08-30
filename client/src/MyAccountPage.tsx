import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

export default function Main(): JSX.Element {
    const [sign,setSign] = useState(null);
    const [profileData, setProfileData] = useState<{username: string}>({username: ""});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [authResponse, userResponse] = await Promise.all([
                    axios.post('/get_auth'),
                    axios.post('/get_user')
                ]);

                setSign(authResponse.data);
                setProfileData(userResponse.data[0]);

                console.log(authResponse.data);
                console.log(userResponse.data[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <MyAccountLayout>
                    <MyAccountHomeBox>
                        <WelcomeSection>
                            <WelcomSectionH1>
                                <WelcomeSectionSpan>환영합니다,</WelcomeSectionSpan>
                                {profileData.username}님
                            </WelcomSectionH1>
                        </WelcomeSection>
                    </MyAccountHomeBox>
            </MyAccountLayout>
            <Footer />
        </>
    );
}

const MyAccountLayout = styled.div`
    padding-top: 73px;
    letter-spacing: .03125rem;
`;

const MyAccountHomeBox = styled.div`
    min-height: 55.625rem;

    @media screen and (min-width: 52.5rem) {
        min-height: 52.5rem;
    }
`;

const WelcomeSection = styled.section`
    position: relative;
    min-height: 16.188rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8E6C62;
    text-align: center;
`;

const WelcomSectionH1 = styled.h1`
    margin: 0;
    padding: 0 0.563rem;
    color: #FFF;
    font-size: 1.563rem;
    font-weight: 600;
    line-height: 1.938rem;

    @media screen and (min-width: 37.5625rem) {
        font-size: 1.344rem;
        letter-spacing: .075rem;
        line-height: 1.375;
    }

    @media screen and (min-width: 60.0625rem) {
        font-size: 1.563rem;
        letter-spacing: .0875rem;
        line-height: 1.32;
    }
`;
const WelcomeSectionSpan = styled.span`
    display: block;
    font-size: .875rem;
    letter-spacing: .044rem;
    line-height: 1.5;

    @media screen and (min-width: 60.0625rem) {
        font-size: .875rem;
        letter-spacing: .044rem;
        line-height: 1.5;
    }
`;