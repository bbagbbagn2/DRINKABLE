import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Main(): JSX.Element {

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const LOGIN_URL = '/login';

    const onIdHandler = (event: any) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event: any) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmit = () => {
        if (id && password) {
            axios.post(LOGIN_URL, {
                id: id,
                pwd: password
            })
                .then((res) => {
                    if (res.data === "success") {
                        window.location.href = '/';
                    } else {
                        alert("아이디와 비밀번호를 확인해 주십시오.");
                    }
                });
        } else {
            alert("아이디와 비밀번호를 확인해 주십시오.");
        }
    }


    const [currentButton, setCurrentButton] = useState<boolean>(true);

    const handleButtonClick = (isLoggedIn: boolean) => {
        setCurrentButton(isLoggedIn);
    }
   
    useEffect(() => {
        console.log(currentButton); // 상태 변경 후 값 출력
    }, [currentButton]);

    return (
        <>
            <Header />
            <LoginPageLayout>
                <LoginPageCol>
                    <LoginPageBox>
                        <MyPageTitleBox>
                            <TitleContextBox>
                                <MypageTitleParagraph>마이 페이지</MypageTitleParagraph>
                            </TitleContextBox>
                        </MyPageTitleBox>
                        <LoginResisterBox>
                            <LoginResisterNav>
                                <LoginResisterList>
                                    <LoginResisterItem>
                                        <LoginResisterLink
                                            to="/login"
                                            role="button"
                                            aria-current={currentButton === true ? 'true' : 'false'}
                                            onClick={() => handleButtonClick(true)}>
                                            로그인
                                        </LoginResisterLink>
                                    </LoginResisterItem>
                                    <LoginResisterItem>
                                        <LoginResisterLink
                                            to="/login"
                                            role="button"
                                            aria-current={currentButton === false ? 'true' : 'false'}
                                            onClick={() => handleButtonClick(false)}>
                                            등록하기
                                        </LoginResisterLink>
                                    </LoginResisterItem>
                                </LoginResisterList>
                            </LoginResisterNav>
                        </LoginResisterBox>
                        <UserContentBox>
                            <UserTextBox>
                                <ContentBox>
                                    <ContextForm>
                                        <SubTitlePharagraph fontSize='1rem' fontWeight="700" marginBottom='0.0625rem' letterSpacing='0.0625rem'>DRINKABLE을 찾아주셔서 감사합니다.</SubTitlePharagraph>
                                        <SubTitlePharagraph>이메일과 비밀번호로 로그인</SubTitlePharagraph>
                                        <DataFormCol>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    label="아이디"
                                                    onChange={onIdHandler} />
                                            </LoginInputBox>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    type="password"
                                                    label="비밀번호"
                                                    onChange={onPasswordHandler} />
                                            </LoginInputBox>
                                            <LoginButtonBox>
                                                <LoginButtonItem>
                                                    <LoginButton type="submit" onClick={onSubmit}>로그인</LoginButton>
                                                </LoginButtonItem>
                                            </LoginButtonBox>
                                        </DataFormCol>
                                    </ContextForm>
                                </ContentBox>
                            </UserTextBox>
                        </UserContentBox>
                    </LoginPageBox>
                </LoginPageCol>
            </LoginPageLayout>
            <Footer />
        </>
    );
}

const LoginPageLayout = styled.div`
    min-height: calc(100vh - 8.75rem);
    position: relative;
    background-color: #FFFFFF;
    z-index: 1;
`;

const LoginPageCol = styled.div`
    padding: 0 8.055%;
    margin: 0 auto;
    max-width: 83.875rem;
    display: block;
    overflow: hidden;
`;

const LoginPageBox = styled.div`
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -0.97vw;
    margin-right: -0.97vw; 
`;

const MyPageTitleBox = styled.div`
    padding: 0 1%;    
    margin: 4.5rem 8.3% 3rem;
    width: 83.3%;
    display: block;
    text-align: center;
    flex-basis: auto;

    @media screen and (max-width: 60.063rem) {
        margin: 5vw 0 2.25rem 0;
        padding: 0 0.972vw;
        width: 100%;
    }
`;

const TitleContextBox = styled.div`
    box-sizing: border-box;
`;

const MypageTitleParagraph = styled.h1`
    color: #8E6C62;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;

    @media screen and (max-width: 60.063rem) {
        margin: 0;
        padding: 0;
        font-size: 1.875rem;
        letter-spacing: normal;
        line-height: 1.2;
    }
`;

const LoginResisterBox = styled.div`
    margin: 0 auto;
    padding: 0;
    min-width: 33.33%;
    width: auto;
    flex-basis: auto;

    @media screen and (max-width: 60.063rem) {
        padding: 0 0.972vw;
        width: 100%;
    }
    
`;
const LoginResisterNav = styled.nav`
    border-bottom: 1px solid #ECECEC;
`;
const LoginResisterList = styled.ul`
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;

    @media screen and (min-width: 60.06rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
const LoginResisterItem = styled.li`
    margin: 0;
    padding: 0;
    width: auto;
    box-sizing: border-box;
    flex: 0 0 50%;
    s
    @media screen and (min-width: 60.06rem) {
        grid-row: 1;
        justify-self: stretch;
    }
`;
const LoginResisterLink = styled(Link)`
    position: relative;
    padding: 0 1.56rem;
    width: 100%;
    height: 3.125rem;
    display: inline-flex;
    align-items: center;
    place-content: center;
    border-width: 0;
    border-radius: 0;
    border-bottom: 3px solid ${(props) => (props['aria-current'] === 'true' ? "#1D1D1D" : "#FFF")};
    font-weight: 700;
    letter-spacing: .05rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    @media screen and (min-width: 60.06rem) {
        font-size: .938rem;
        letter-spacing: .05rem;
        line-height: 1.5;
        cursor: pointer;
    }
`;

const UserContentBox = styled.div`
    margin-left: 33.33%;
    margin-right: 33.33%;
    padding-left: 0.97vw;
    padding-right: 0.97vw;
    width: 33.33%;
    box-sizing: border-box;
    flex-basis: auto;
`;
const UserTextBox = styled.div`
    padding: 2.25rem 0;
    box-sizing: border-box;
`;
const ContentBox = styled.div`
    box-sizing: border-box;
`;
const ContextForm = styled.form`
    margin-bottom: 1.69rem;
    box-sizing: border-box;
`;
const SubTitlePharagraph = styled.p<{ marginBottom?: string; fontSize?: string; letterSpacing?: string; fontWeight?: string; }>`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    
    margin-bottom: ${(props) => (props.marginBottom || "1.125rem")};
    font-size: ${(props) => (props.fontSize || ".875rem")};
    font-weight: ${(props) => (props.fontWeight || "300")};
    letter-spacing: ${(props) => (props.letterSpacing || "0.03rem")};
`;
const DataFormCol = styled.div`
    padding-top: 1.25rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
`;
const LoginInputBox = styled.div`
    box-sizing: border-box;
    margin-bottom: 1.125rem;
`;
const LoginInput = styled(TextField)`
    width: 100%;
    height: 70px;
    background: white;
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
const LoginButtonBox = styled.div`
    margin-top: 1.69rem;
    margin-bottom: 0;
    box-sizing: border-box;
`;
const LoginButtonItem = styled.div`
    margin: 0 auto;
    max-width: none;
    box-sizing: border-box;
`;
const LoginButton = styled.button`
    margin: 0;
    padding: 0 1.6rem;
    width: 100%;
    height: 3.125rem;
    position: relative; 
    box-sizing: border-box;
    align-content: center;
    align-items: center;
    border: 1px solid #8E6C62;
    border-radius: 0;
    background: #8E6C62;
    color: #FFF;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .04rem;
    line-height: 1.5;
    text-transform: lowercase;
    vertical-align: middle;
    appearance: none;
    cursor: pointer;
`;

