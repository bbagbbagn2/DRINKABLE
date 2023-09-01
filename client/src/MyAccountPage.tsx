import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

export default function Main(): JSX.Element {
    const [sign, setSign] = useState(null);
    const [profileData, setProfileData] = useState({ username: ""});
    const GET_AUTH_URL = '/get_auth';
    const GET_USER_URL = '/get_user';
    const LOGOUT_URL = '/logout';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [authResponse, userResponse] = await Promise.all([
                    axios.post(GET_AUTH_URL),
                    axios.post(GET_USER_URL)
                ]);
                setSign(authResponse.data);

                if (userResponse.data && userResponse.data.length > 0) {
                    setProfileData(userResponse.data[0]);
                }
                console.log(authResponse.data);
                console.log(userResponse.data[0]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const logoutUser = async () => {
        try {
            const response = await axios.post(LOGOUT_URL);

            if (response.status === 200) {
                const responseData = response.data;
                console.log(responseData);

            } else {
                console.error('Logout failed.');
            }
        } catch (error) {
            console.error('An error occurred during logout:', error);
        }
    };

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
                    <MyAccBox>
                        <MyAccDetailsSection>
                            <MyAccDetailsH2>나의 정보</MyAccDetailsH2>
                            <MyAccDetailsList>
                                <MyAccDetailsItem>
                                    <MyAccInformationBox>
                                        <MyAccInformationLink to="/account/personal-details">
                                            <MyAccInformationSpan>나의 정보</MyAccInformationSpan>
                                        </MyAccInformationLink>
                                    </MyAccInformationBox>
                                </MyAccDetailsItem>
                                <MyAccDetailsItem>
                                    <LogOutLinkBox>
                                        <LogOutLink to="/sign-out" onClick={logoutUser}>
                                            <LogOutSpan>로그아웃</LogOutSpan>
                                        </LogOutLink>
                                    </LogOutLinkBox>
                                </MyAccDetailsItem>
                            </MyAccDetailsList>
                        </MyAccDetailsSection>
                    </MyAccBox>
                </MyAccountHomeBox>
            </MyAccountLayout>
            <Footer />
        </>
    );
}

const MyAccountLayout = styled.div`
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

const MyAccBox = styled.div`
    margin: 3.9375rem auto 0;
    padding: 0 2.063rem;

    @media screen and (max-width: 60.0625rem) {
        margin: 3.9375rem auto 0;
        padding: 0 1.25rem;
        max-width: 375px;
    }
`;

const MyAccDetailsSection = styled.section`
    padding: 0 0.938rem;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    line-height: 1.125rem;

    @media screen and (max-width: 60.0625rem) {
        margin-bottom: 1.6875rem;
        padding: 0;    
    }
`;
const MyAccDetailsH2 = styled.h2`
    margin: 0 0 1.4375rem 0;
    padding: 0 0 1.125rem 0;
    border-bottom: 1px solid #ECECEC;
    font-size: .9375rem;
    font-weight: 700;
    letter-spacing: .05rem;
    line-height: 1.5;

    @media screen and (max-width: 60.0625rem) {
        padding-bottom: 0.5625rem; 
        letter-spacing: .0625rem;
        line-height: 1.4;    
    }
`;

const MyAccDetailsList = styled.ul`
    margin: 0 -0.938rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 60.0625rem) {
        margin: 0;
        display: block;
    }
`;
const MyAccDetailsItem = styled.li`
    margin-bottom: 1.4375rem;
    padding: 0 0.938rem;
    flex-basis: 33.333%;
    flex-shrink: 0;

    @media screen and (max-width: 60.0625rem) {
        padding: 0;    
    }
`;

const MyAccInformationBox = styled.div`
    padding-bottom: 1.125rem;
    display: flex;
    border-bottom: 1px solid #ECECEC;
`;

const MyAccInformationLink = styled(Link)`
    display: flex;
    flex-grow: 1;
`;
const MyAccInformationSpan = styled.span`
    position: relative;
    margin-right: auto;
    border-bottom: 0px solid transparent;
    transition: all 0.5s ease-out;

    &:hover {
        border-bottom : 1px solid #1D1D1D;
    }
`;

const LogOutLinkBox = styled.div`
    display: flex;
`;

const LogOutLink = styled(Link)`
    display: flex;
    flex-grow: 1;
    curcor: pointer;
`
const LogOutSpan = styled.span`
    position: relative;
    margin-right: auto;
    color: #767676;
    border-bottom: 0px solid transparent;

    &:hover {
        border-bottom : 1px solid #1D1D1D;
        transition: all 0.5s ease-out;
    }
`;