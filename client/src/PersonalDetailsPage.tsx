import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { TextField } from '@material-ui/core';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import axios from 'axios';

export default function Main(): JSX.Element {
    const [sign, setSign] = useState(null);
    const [profileData, setProfileData] = useState({ username: "" });
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

    return (
        <>
            <Header />
            <MainLayout>
                <MainContainer>
                    <ToMyPageSection>
                        <ToMyPageNavogationContainer>
                            <ToMyPageOrderedListView>
                                <ToMyPageOrderedListItem>
                                    <MdOutlineKeyboardArrowLeft size="1rem" />
                                    <ToMyPageParagraph>
                                        <ToMyPageLink to="/account">
                                            <ToMyPageSpan> 마이 페이지</ToMyPageSpan>
                                        </ToMyPageLink>
                                    </ToMyPageParagraph>
                                </ToMyPageOrderedListItem>
                            </ToMyPageOrderedListView>
                        </ToMyPageNavogationContainer>
                    </ToMyPageSection>
                    <PageTitleSection>
                        <div>
                            <PageTitleHeading>나의 정보</PageTitleHeading>
                        </div>
                    </PageTitleSection>
                    <UserContainer>
                        <UserBox>
                            <ProfileUpadateSetion>
                                <ProfileUpdateHeadingBox className='has-thin-seperator'>
                                    <ProfileUpdateHeading>프로필</ProfileUpdateHeading>
                                </ProfileUpdateHeadingBox>
                                <UpdateProfileForm>
                                    <div>
                                        <UsernameInputBox>
                                            <UsernameInput
                                                variant="standard"
                                                label={profileData.username}/>
                                        </UsernameInputBox>
                                        <ProfileUpadateButtonContainer>
                                            <ProfileUpadateButtonBox>
                                                <ProfileUpadateButton>
                                                    <ProfileUpadateSpanBox>
                                                        <ProfileUpadateSpan>프로필 업데이트</ProfileUpadateSpan>
                                                    </ProfileUpadateSpanBox>
                                                </ProfileUpadateButton>
                                            </ProfileUpadateButtonBox>
                                        </ProfileUpadateButtonContainer>
                                    </div>
                                </UpdateProfileForm>
                            </ProfileUpadateSetion>
                        </UserBox>
                    </UserContainer>
                </MainContainer>
            </MainLayout>
            <Footer />
        </>
    );
}

const MainLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 84px);
    background-color: #FFF;
    z-index: 1;
`;

const MainContainer = styled.div`
    position: relative;
    min-height: calc(100vh - 8.5rem);
`;

const ToMyPageSection = styled.section`
    position: relative;
    padding: 1rem 0;
    height: 54px;
    z-index: 50;
`;

const ToMyPageNavogationContainer = styled.nav`
    position: fixed;
    padding: 0 8.0556%;
    top: 0;
    width: 100%;
    height: 3.375rem;
    background-color: #FFF;
    border-bottom: 1px solid #ECECEC;
    line-height: 3;
    overflow: hidden;
    rotate: none;
    scale: none;
    translate: none;
    transform: translate(0, 84px); 
    z-index: 60;
`;

const ToMyPageOrderedListView = styled.ol`
    margin: 0 -0.9722vw;
    padding: 0 0.9722vw;
    width: 100%;
    display: flex;
    flex-basis: auto;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    overflow-x: hidden;
`;

const ToMyPageOrderedListItem = styled.li`
    margin: 0;
    padding: 0;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
`;
const ToMyPageParagraph = styled.p`
    margin: 0;
    padding: 0;
`;
const ToMyPageLink = styled(Link)`
    padding: 1.0625rem 0.5625rem 1.0625rem 0;
    position: relative;
    display: inline-flex;
    border: 0;
    font-weight: 700;
    letter-spacing: normal;
`;
const ToMyPageSpan = styled.span`
    padding: 0;
    letter-spacing: .0438rem;
    line-height: 1.5;
`;

const PageTitleSection = styled.section`
    margin: 4.5rem 0 1.125rem 0;
    width: 100%;
    text-align: center;
`;
const PageTitleHeading = styled.h1`
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;
`;

const UserContainer = styled.div`
    margin: 0;
    padding: 0 8.0556%;
    max-width: 83.875rem;
    box-sizing: initial;
    overflow: hidden;
`;

const UserBox = styled.div`
    margin: 0 -0.9722vw;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
`;

const ProfileUpadateSetion = styled.section`
    margin: 0 33.3333%;
    padding: 2.25rem 0.9722vw;
    width: 33.3333%;
    flex-basis: auto;
`;

const ProfileUpdateHeadingBox = styled.div`
    position: relative;
    margin-bottom: 1.6875rem;
    display: flex;
    flex-wrap: wrap;

    &.has-thin-seperator::after {
        margin-top: 0.5625rem;
        width: 100%;
        height: 0.25rem;
        display: block;
        content:"";
        background-color: #000;
    }
`
const ProfileUpdateHeading = styled.h2`
    font-size: .9375rem;
    letter-spacing: .05rem;
`;

const UpdateProfileForm = styled.form``;

const UsernameInputBox = styled.div`
    margin-bottom: 1.125rem;
`;

const UsernameInput = styled(TextField)`
    width: 100%;
    height: 70px;
    background: #FFF;
    color: #333;

    & label.Mui-focused {
        color: #333;
        }
        & .MuiInput-underline:after {
        border-bottom-color: #000;
        }
        & .MuiOutlinedInput-root {
        & fieldset {
            border-color: #000;
        }
        &:hover fieldset {
            border-color: #000;
        }
        &.Mui-focused fieldset {
            border-color: #000;
        }
    }
`;

const ProfileUpadateButtonContainer = styled.div`
    margin-top: 36px;
`;

const ProfileUpadateButtonBox = styled.div`
    width: auto;
    max-width: none;
`;

const ProfileUpadateButton = styled.button`
    width: 100%;
    height: 3.125rem;
    align-items: center;
    place-content: center;
    appearance: none;
    background-color: #000;
    border: 1px solid #000;
    color: #FFF;
    font-size: .8125rem!important;
    font-weight: 700;
    letter-spacing: .04375rem!imporatnt;
    line-height: 1.5!important;
    vertical-align: middle;
    cursor: pointer;

        span span::after {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            bottom: -0.3rem;
            width: 100%;
            content: "";
            height: 1px;
            transform: scaleX(.98);
            transition: all .5s ease-out;
            opacity: 0;
        }

        &:hover span span::after {
            background-color: #FFF;
            opacity: 1;
        }
`;
const ProfileUpadateSpanBox = styled.span`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`;
const ProfileUpadateSpan = styled.span`
    position: relative;
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