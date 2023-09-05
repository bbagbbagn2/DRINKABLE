import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import axios from 'axios';

interface profileData {
    username: string;
}

export default function Header(): JSX.Element {
    const [sign, setSign] = useState<string | null>(null);
    const [profileData, setProfileData] = useState<profileData>({ username: "admin_user" });
    const GET_AUTH_URL = '/get_auth';
    const GET_PROFILE_URL = '/get_profile';

    const fetchData = async () => {
        try {
            const authResponse = await axios.post<string>(GET_AUTH_URL);
            const userData = authResponse.data;
            setSign(userData);

            const profileResponse = await axios.post<profileData[]>(GET_PROFILE_URL, {
                user: userData
            });
            setProfileData(profileResponse.data[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = (height: number) => {
        const targetHeight = height;
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
    };

    return (
        <HeaderLayout>
            <HeaderCol>
                <HeaderContainer>
                    <HeaderBox>
                        <HeaderNav>
                            <LogoBox onClick={() => handleScroll(0)}>
                                <Logo />
                            </LogoBox>
                            <HeaderList>
                                <HeaderItem to="/" onClick={() => handleScroll(0)}>HOME</HeaderItem>
                                <HeaderItem to="/" onClick={() => handleScroll(680)}>ABOUT</HeaderItem>
                                <HeaderItem to="/classfication">CLASSFICATION</HeaderItem>
                            </HeaderList>
                            <MyPageCol>
                                <MobileHeaderMenuButton to="#">
                                    <AiOutlineMenu size="17" fill='#8E6C62' />
                                </MobileHeaderMenuButton>
                                <HeaderItemButton><CiSearch size="17" fill='#8E6C62' /></HeaderItemButton>
                                <MyPageItem to={sign ? "/account" : "/login"}><CiUser size="17" fill='#8E6C62' /></MyPageItem>
                                <MyPageItem to="/wishlists"><CiStar size="17" fill='#8E6C62' /></MyPageItem>
                            </MyPageCol>
                        </HeaderNav>
                    </HeaderBox>
                </HeaderContainer>
            </HeaderCol>
        </HeaderLayout>
    );
}

const HeaderLayout = styled.header`
    position: relative;
    background: #FFF;
    height: 84px;
    display: block;
    z-index: 90;


    @media screen and (max-width: 60.063rem) {
        height: 4.375rem;
    }
    
    @media screen and (max-width: 37.563rem) {
        height: 3.75rem;
    }
`;

const HeaderCol = styled.div`
    position: fixed;
    width: 100%;
    height: auto;
    background-color: #FFF;
    border-bottom: 1px solid #ECECEC;
    z-index: 80;

    @media screen and (max-width: 60.063rem) {
        position: static;
        height: 100%;
    }
`;

const HeaderContainer = styled.div`
    position: relative;    
`;

const HeaderBox = styled.div`
    position: relative;
    border-top: 0.5rem solid #8E6C62;
    z-index: 90;

    @media screen and (max-width: 60.063rem) {
        position: fixed;
        width: 100%;
        background-color: #FFF;
        border-bottom: 1px solid #ECECEC;
        z-index: 10;
    }
`;

const HeaderNav = styled.div`
    margin: 0 auto;
    padding: 0 8%;
    max-width: 83.875rem;
    min-height: 4.6875rem;
    box-sizing: initial;
    display: grid;
    grid-template-columns: 234px 1fr 150px;
    align-items: stretch;
    overflow: hidden;

    @media screen and (max-width: 60.063rem) {
        padding: 0 1.25rem;
        min-height: 3.1875rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
    }       
`;

const LogoBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    align-items: center;
    justify-content: center;
`;

const HeaderList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 60.063rem) {
        display: none;
    }
`;

const HeaderItem = styled(Link)`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
    color: #8E6C62;
    font-size: 14px;
    font-weight: medium;
    text-decoration: none;
    letter-spacing: 1.909091px;
    transition: ease 0.3s;
    
    &:hover{
        color: #4E3C36;
    }
`;

const MobileHeaderMenuButton = styled(Link)`
    display: none;

    @media screen and (max-width: 60.063rem) {
        position: relative;
        padding: 0.75rem 0.5rem 1rem;
        padding-top: 1.375rem;
        padding-bottom: 1.375rem;
        width: auto;
        min-width: 2.25rem;
        height: auto;
        display: grid;
        place-items: center;
        place-content: center;
        border-width: 0;
        border-radius: 0;
        font-size: .6875rem;    
        cursor: pointer;
    }

    @media screen and (max-width: 37.563rem) {
        padding-top: 0.75rem;
        padding-bottom: 1rem;
    }
`;

const MyPageCol = styled.div`
    margin: 0;
    padding: 0;
    min-width: 9.375rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 60.063rem) {
        overflow: hidden;
    }       

`;

const HeaderItemButton = styled.button`
    margin: 0;
    padding: 1.875rem 0.5rem 1.25rem;
    position: relative;
    width: auto;
    min-width: 2.25rem;
    height: auto;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    place-content: center;
    appearance: none;
    background-color: initial;
    border-width: 0;
    cursor: pointer;
`
const MyPageItem = styled(Link)`
    margin: 0;
    padding: 1.875rem 0.5rem 1.25rem;
    width: auto;
    min-width: 2.25rem;
    height: auto;
    display: grid;
    align-items: center;
    place-content: center;
    border-radius: 0;
    border-width: 0;
    letter-spacing: normal;
    line-height: 1.272;

    @media (max-width: 60.063rem) {
        display: none;
    }
`;