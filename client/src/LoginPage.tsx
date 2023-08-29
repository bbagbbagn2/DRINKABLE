import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { setScreenSize } from './utils';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Main(): JSX.Element {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event: any) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event: any) => {
        setPassword(event.currentTarget.value);
    }

    const onKeyPress = (e: any) => {
        if (e.key === 'Enter')
            onSubmit();
    }

    const onSubmit = () => {
        if (!id || !password) {
            alert("아이디 및 비밀번호를 확인해 주세요.");
        }

        axios.post('/login', {
            id: id,
            pwd: password
        })
            .then((res) => {
                if (res.data === "success") {
                    window.location.href = '/';
                } else {
                    alert("아이디 및 비밀번호를 확인해 주세요.");
                }
            });
    }

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
                                        <LoginResisterLink to="#">로그인</LoginResisterLink>
                                    </LoginResisterItem>
                                    <LoginResisterItem>
                                        <LoginResisterLink to="#">등록하기</LoginResisterLink>
                                    </LoginResisterItem>
                                </LoginResisterList>
                            </LoginResisterNav>
                        </LoginResisterBox>
                        <UserContentBox>
                            <UserTextBox>
                                <ContentBox>
                                    <ContextForm>
                                        <SubTitlePharagraph fontSize='1rem' fontWeight="700" marginBottom='0.0625rem' letterSpacing='0.0625rem'>DRINKABLE을 찾아주셔서 감사합니다.</SubTitlePharagraph>
                                        <SubTitlePharagraph>이메일 혹은 휴대폰 번호와 비밀번호로 로그인</SubTitlePharagraph>
                                        <DataFormCol>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    label="이메일/휴대폰 번호"
                                                    onChange={onIdHandler} />
                                            </LoginInputBox>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    type="password"
                                                    label="비밀번호"
                                                    onChange={onPasswordHandler}
                                                    onKeyPress={onKeyPress} />
                                            </LoginInputBox>
                                            <LoginButtonBox>
                                                <LoginButtonItem>
                                                    <LoginButton onClick={onSubmit}>로그인</LoginButton>
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
    padding-top: 73px;
    min-height: calc(var(--vh) * 100);
    position: relative;
    display: block;
    box-sizing: border-box;
    background: #FFFFFF;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: .03rem;
`;

const LoginPageCol = styled.div`
    padding: 0 8%;
    margin: 0 auto;
    max-width: 83.875rem;
    display: block;
    overflow: hidden;
`;

const LoginPageBox = styled.div`
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    margin-left: -0.97vw;
    margin-right: -0.97vw; 
`;

const MyPageTitleBox = styled.div`
    padding: 0 1%;    
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    margin-left: 8.3%;
    margin-right: 8.3%;
    width: 83.3%;
    box-sizing: border-box;
    display: block;
    text-align: center;
    flex-basis: auto;

    @media (max-width: 700px) {
        margin-top: 14.4vw;
        margin-bottom: 2.25rem;
    }
`;

const TitleContextBox = styled.div`
    box-sizing: border-box;
`;

const MypageTitleParagraph = styled.h1`
    box-sizing: border-box;
    color: #8E6C62;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;
    text-transform: lowercase;

    @media (max-width: 700px) {
        font-size: 1.5625rem;
        line-height: 1.24;
        letter-spacing: normal;
    }
`;

const LoginResisterBox = styled.div`
    margin: 0 auto;
    padding: 0;
    min-width: 33.33%;
    width: auto;
    box-sizing: border-box;
    flex-basis: auto;
    
`;
const LoginResisterNav = styled.nav`
    box-sizing: border-box;
    border-bottom: 1px solid #ECECEC;
`;
const LoginResisterList = styled.ul`
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-auto-columns: 1fr;
    place-content: center;
    list-style: none;
    padding-inline-start: 0;
`;
const LoginResisterItem = styled.li`
    margin: 0;
    padding: 0;
    width: auto;
    box-sizing: border-box;
    flex: 0 0 50%;
    grid-row: 1;
    justify-self: stretch;
`;
const LoginResisterLink = styled(Link)`
    padding: 0 1.6rem;
    width: 100%;
    height: 3.125rem;
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    place-content: center;
    align-items: center;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .05rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    @media (max-width: 700px) {
        font-size: .7rem;
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

