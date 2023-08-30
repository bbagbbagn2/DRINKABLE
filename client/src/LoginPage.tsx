import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Main(): JSX.Element {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const LOGIN_URL = '/login';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                id: id,
                password: password
            });

            if (response.data === "success") {
                window.location.href = '/';
            } else {
                alert("아이디 및 비밀번호를 확인해주세요.");
            }
        } catch (error) {
            alert("아이디 및 비밀번호를 확인해주세요.");
        }
    };

    const [currentButton, setCurrentButton] = useState<boolean>(true);

    const handleButtonClick = (isLogin: boolean) => {
        setCurrentButton(isLogin);
    }
   
    useEffect(() => {
        console.log(currentButton); // 상태 변경 후 값 출력
    }, [currentButton]);

    return (
        <>
            <Header />
            <LoginPageLayout onSubmit={handleSubmit}>
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
                                        <SubTitlePharagraph>아이디와 비밀번호로 로그인</SubTitlePharagraph>
                                        <DataFormCol>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    label="아이디"
                                                    value={id}
                                                    onChange={(e) => setId(e.target.value)} />
                                            </LoginInputBox>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    type="password"
                                                    label="비밀번호"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </LoginInputBox>
                                            <LoginButtonBox>
                                                <LoginButtonItem>
                                                    <LoginButton type="submit">로그인</LoginButton>
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
    position: relative;
    width: 100%;
    display: block;
    background: #FFFFFF;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: .03rem;
`;

const LoginPageCol = styled.div`
    padding-left: 5.333%;
    padding-right: 5.333%; 
    margin: 0 auto;
    max-width: 83.875rem;
    box-sizing: initial;
    overflow: hidden;

    @media screen and (min-width: 37.563rem) {
        padding-top: 0; 
        padding-left: 8.056%;
        padding-right: 8.056%; 
        margin: 0 auto;
        max-width: 8.875rem;
        overflow: hidden;
    }

    @media screen and (min-width: 37.563rem) and (min-width: 60.06rem) {
        padding-left: 8.056%;
        padding-right: 8.056%; 
        margin: 0 auto;
        max-width: 83.875rem;
        overflow: hidden;
    }

    @media screen and (min-width: 37.563rem) and (min-width: 37.563rem) {
        padding-left: 8.056%;
        padding-right: 8.056%; 
        margin: 0 auto;
        max-width: 83.875rem;
        overflow: hidden;
    }
`;

const LoginPageBox = styled.div`
    margin-left: -2.533vw;
    margin-right: -2.533vw;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    @media screen and (min-width: 37.563rem) {
        margin-left: -0.972vw;
        margin-right: -0.972vw;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
    }

    @media screen and (min-width: 37.563rem) and (min-width: 37.563rem) {
        margin-left: -0.972vw;
        margin-right: -0.972vw;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }

    @media screen and (min-width: 37.563rem) and (min-width: 60.06rem) {
        margin-left: -0.972vw;
        margin-right: -0.972vw;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
    }
`;

const MyPageTitleBox = styled.div`
    padding: 0 2.533vw;    
    margin: 4.5rem 8.3% 2.8125rem 8.3%;
    width: 100%;
    display: block;
    text-align: center;
    flex-basis: auto;

    @media screen and (max-width: 37.5rem) {
        margin: 14.4vw 0 2.25rem 0; 
    }
`;

const TitleContextBox = styled.div``;

const MypageTitleParagraph = styled.h1`
    box-sizing: border-box;
    color: #8E6C62;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;
    text-transform: lowercase;

    @media screen and (max-width: 37.5rem) {
        margin: 0;
        padding: 0;
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

    @media screen and (max-width: 37.5rem) {
        margin: 0;
        padding: 0 2.533vw;
        width: 100%;
        letter-spacing: .0313rem;
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

    @media screen and (max-width: 37.5rem) {
        margin: 0;
        padding: 0 2.533vw;
        width: 100%;
    }
`;
const UserTextBox = styled.div`
    padding: 2.25rem 0;

    @media screen and (max-width: 37.5rem) {
        padding: 1.125rem 0;
    }
`;
const ContentBox = styled.div``;

const ContextForm = styled.form`
    margin-bottom: 1.69rem;

    @media screen and (max-width: 37.5rem) {
        margin: 1.125rem 0 1.689rem 0;
    }
`;
const SubTitlePharagraph = styled.p<{ marginBottom?: string; fontSize?: string; letterSpacing?: string; fontWeight?: string; }>`
    margin: 0;
    padding: 0;
    text-align: center;
    
    margin-bottom: ${(props) => (props.marginBottom || "1.125rem")};
    font-size: ${(props) => (props.fontSize || ".875rem")};
    font-weight: ${(props) => (props.fontWeight || "300")};
    letter-spacing: ${(props) => (props.letterSpacing || "0.03rem")};
`;

const DataFormCol = styled.div`
    padding-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;

    
    @media screen and (max-width: 37.5rem) {
        padding: 0;
    }
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

