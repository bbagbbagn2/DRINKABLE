import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { TextField } from '@material-ui/core';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import axios from 'axios';

export default function Main(): JSX.Element {
    const [sign, setSign] = useState(null);
    const [profileData, setProfileData] = useState({ username: "" });
    const [newUsername, setNewUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const GET_AUTH_URL = '/get_auth';
    const GET_USER_URL = '/get_user';
    const UPDATE_USERNAME_URL = '/update_username';
    const UPDATE_PASSWORD_URL = '/update_password';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authResponse = await axios.post(GET_AUTH_URL);
                setSign(authResponse.data);

                const userResponse = await axios.post(GET_USER_URL);
                setProfileData(userResponse.data[0]);
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };

        fetchData();
    }, []);


    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    };

    const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value);
    };

    const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleSubmitUsername = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post(UPDATE_USERNAME_URL, {
                newUsername: newUsername
            });

            if (response.data.username) {
                setProfileData({ username: response.data.username });
                setNewUsername("");
            }
        } catch (error) {
            console.error(error);
        }
    };



    const handleSubmitPassword = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post(UPDATE_PASSWORD_URL, {
                currentPassword: currentPassword,
                newPassword: newPassword
            });

            if (response.data === "success") {
                alert("비밀번호가 변경되었습니다.");
                setCurrentPassword("");
                setNewPassword("");
            } else if (response.data === "incorrect_password") {
                alert("현재 비밀번호가 일치하지 않습니다.")
            } else {
                alert("비밀번호를 변경할 수 없습니다.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            {profileData && (
                <MainLayout>
                    <MainContainer>
                        <ToMyPageSection>
                            <ToMyPageNavogationContainer>
                                <ToMyPageOrderedListView>
                                    <ToMyPageOrderedListItem>
                                        <MdOutlineKeyboardArrowLeft size="21" />
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
                                    <UpdateProfileForm onSubmit={handleSubmitUsername}>
                                        <div>
                                            <StyledInputBox>
                                                <StyledInput
                                                    variant="standard"
                                                    label={profileData.username}
                                                    value={newUsername}
                                                    onChange={handleUsernameChange} />
                                            </StyledInputBox>
                                            <ProfileUpadateButtonContainer>
                                                <ProfileUpadateButtonBox>
                                                    <ProfileUpadateButton type="submit">
                                                        <ProfileUpadateSpanBox>
                                                            <ProfileUpadateSpan>프로필 업데이트</ProfileUpadateSpan>
                                                        </ProfileUpadateSpanBox>
                                                    </ProfileUpadateButton>
                                                </ProfileUpadateButtonBox>
                                            </ProfileUpadateButtonContainer>
                                        </div>
                                    </UpdateProfileForm>
                                </ProfileUpadateSetion>
                                <ProfileUpadateSetion>
                                    <ProfileUpdateHeadingBox className='has-thin-seperator'>
                                        <ProfileUpdateHeading>비밀번호</ProfileUpdateHeading>
                                    </ProfileUpdateHeadingBox>
                                    <UpdateProfileForm onSubmit={handleSubmitPassword}>
                                        <div>
                                            <StyledInputBox>
                                                <StyledInput
                                                    variant="standard"
                                                    label="현재 비밀번호"
                                                    type="password"
                                                    value={currentPassword}
                                                    onChange={handleCurrentPasswordChange} />
                                            </StyledInputBox>
                                            <StyledInputBox>
                                                <StyledInput
                                                    variant="standard"
                                                    label="새로운 비밀번호"
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={handleNewPasswordChange} />
                                            </StyledInputBox>
                                            <ProfileUpadateButtonContainer>
                                                <ProfileUpadateButtonBox>
                                                    <ProfileUpadateButton type="submit">
                                                        <ProfileUpadateSpanBox>
                                                            <ProfileUpadateSpan>비밀번호 변경</ProfileUpadateSpan>
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
            )}
            <Footer />
        </>
    );
}

const MainLayout = styled.main`
    position: relative;
    min-height: calc(100vh - 84px);
    background-color: #FFF;
    z-index: 1;

    @media screen and (max-width: 60.063rem) {
        min-height: auto;
    }
`;

const MainContainer = styled.div`
    position: relative;
    min-height: calc(100vh - 84px);
`;

const ToMyPageSection = styled.div`
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

    @media screen and (max-width: 60.063rem) {
        padding-left: 1.5625rem;
        transform: translate(0, 70px); 
    }

    @media screen and (max-width: 37.563rem) {
        padding: 0 1.25rem;
        height: 2.8125rem;
        transform: translate(0, 60px); 
        line-height: .75;
    }
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

    @media screen and (max-width: 37.563rem) {
        margin: 0 -2.5333vw;
        padding: 0 2.5333vw;
    }
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

const PageTitleSection = styled.div`
    margin: 4.5rem 0 1.125rem 0;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 60.063rem) {
        margin-top: 5vw;
    }

    @media screen and (max-width: 37.563rem) {
        margin-top: 14.4vw;
    }
`;
const PageTitleHeading = styled.h1`
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;

    @media screen and (max-width: 60.063rem) {
        font-size: 1.875rem;
        line-height: 1.2;
    }

    @media screen and (max-width: 37.563rem) {
        font-size: 1.5625rem;
        line-height: 1.24;
    }
`;

const UserContainer = styled.div`
    margin: 0 auto;
    padding: 0 8.0556%;
    max-width: 83.875rem;
    box-sizing: initial;
    overflow: hidden;

    @media screen and (max-width: 37.563rem) {
        padding: 0 5.3333%;
    }
`;

const UserBox = styled.div`
    margin: 0 -0.9722vw;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    
    @media screen and (max-width: 37.563rem) {
        margin: 0 -2.5333vw;
    }
`;

const ProfileUpadateSetion = styled.section`
    margin: 0 33.3333%;
    padding: 2.25rem 0.9722vw;
    width: 33.3333%;
    flex-basis: auto;

    @media screen and (max-width: 60.063rem) {
        margin: auto;
        width: 100%;
    }   

    @media screen and (max-width: 37.563rem) {
        padding: 1.125rem 2.5333vw 1.6875rem 2.5333vw;
    }
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
        background-color: #8E6C62;
    }
`
const ProfileUpdateHeading = styled.h2`
    font-size: .9375rem;
    letter-spacing: .05rem;
`;

const UpdateProfileForm = styled.form``;

const StyledInputBox = styled.div`
    margin-bottom: 1.125rem;
`;

const StyledInput = styled(TextField)`
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
    margin: 0 auto;
    width: auto;
    max-width: none;
`;

const ProfileUpadateButton = styled.button`
    margin: 0;
    padding: 0 1.5625rem;
    width: 100%;
    height: 3.125rem;
    align-items: center;
    place-content: center;
    appearance: none;
    background-color: #8E6C62;
    border: 1px solid #8E6C62;
    border-radius: 0;
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

    @media screen and (max-width: 60.063rem) {
        letter-spacing: .04375rem;
    }
`;