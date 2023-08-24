import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { setScreenSize } from './utils';
import { TextField } from '@material-ui/core';

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
            <LoginPageLayout>
                <LoginPageCol>
                    <LoginPageBox>
                        <MyPageTitleBox>
                            <h1>
                                <MypageTitleParagraph>마이 페이지</MypageTitleParagraph>
                            </h1>
                        </MyPageTitleBox>
                        <LoginResisterNav>
                            <LoginResisterCol>
                                <LoginResisterLink to="#">로그인</LoginResisterLink>
                                <LoginResisterLink to="#">등록하기</LoginResisterLink>
                            </LoginResisterCol>
                        </LoginResisterNav>
                        <SubTitleBox>
                            <SubTitlePharagraph fontSize='1rem' fontWeight="700" marginBottom='0.0625rem' letterSpacing='0.0625rem'>DRINKABLE을 찾아주셔서 감사합니다.</SubTitlePharagraph>
                            <SubTitlePharagraph>이메일 혹은 휴대폰 번호와 비밀번호로 로그인</SubTitlePharagraph>
                        </SubTitleBox>
                        <LoginInputCol>
                            <LoginInputBox>
                            <LoginInput
                                label="이메일/휴대폰 번호"
                                variant="standard"
                            />
                            </LoginInputBox>
                            <LoginInputBox>
                             <LoginInput
                                label="비밀번호"
                                type="password"
                                variant="standard"
                            />
                            </LoginInputBox>
                        </LoginInputCol>
                        <div>
                            <LoginButton>로그인</LoginButton>
                        </div>
                    </LoginPageBox>
                </LoginPageCol>
            </LoginPageLayout>
            <Footer />
        </>
    );
}

const LoginPageLayout = styled.div`
    padding-top: 65px;
    height: 96vh;
    display: grid;
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
    overflow: hidden;
`;

const LoginPageBox = styled.div`
    align-items: stretch;
`;

const MyPageTitleBox = styled.div`
    padding: 0 1%;    
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    margin-left: 8%;
    margin-right: 8%;
    width: 83%;
    display: grid;
    place-items: center;
    flex-basis: auto;
`;

const MypageTitleParagraph = styled.p`
    color: #8E6C62;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;
`;

const LoginResisterNav = styled.nav`
    border-bottom: 1px solid #ECECEC;
`;

const LoginResisterCol = styled.div`
    height: 3.75rem;
    width: 100%;    
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const LoginResisterLink = styled(Link)`
    padding: 0 1.6rem;
    display: grid;
    place-items: center;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .05rem;
`;

const SubTitleBox = styled.div`
    padding: 36px 1vw 0;
    flex-basis: auto;
    text-align: center;
`;

const SubTitlePharagraph = styled.p<{ marginBottom?: string; fontSize?: string; letterSpacing?: string; fontWeight?: string; }>`
    margin: 0;
    
    margin-bottom: ${(props) => (props.marginBottom || "1.125rem")};
    font-size: ${(props) => (props.fontSize || ".875rem")};
    font-weight: ${(props) => (props.fontWeight || "300")};
    letter-spacing: ${(props) => (props.letterSpacing || "0.03rem")};
`;

const LoginInputCol = styled.div`
    padding-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
`;

const LoginInputBox = styled.div`
    box-sizing: border-box;
    margin-bottom: 1.125rem;
`;

const LoginInput  = styled(TextField)`
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

const LoginButton = styled.button`
    margin: 0;
    padding: 0 1.6rem;
    width: 100%;
    height: 3.125rem;
    border: 1px solid #8E6C62;
    border-radius: 0;
    background: #8E6C62;
    color: #FFF;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .04rem;
    line-height: 1.5;
    appearance: none;
    cursor: pointer;
`;

