import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
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
                <LogoBox onClick={() => handleScroll(0)}>
                    <Logo />
                </LogoBox>
                <HeaderList>
                    <HeaderItem to="/" onClick={() => handleScroll(0)}>HOME</HeaderItem>
                    <HeaderItem to="/" onClick={() => handleScroll(680)}>ABOUT</HeaderItem>
                    <HeaderItem to="/classfication">CLASSFICATION</HeaderItem>
                </HeaderList>
                <MobileHeaderMenuButton>
                    <AiOutlineMenu size="27" fill='#8E6C62' />
                </MobileHeaderMenuButton>
                <MyPageCol>
                    <MyPageItem to="/search"><CiSearch size="20" fill='#8E6C62' /></MyPageItem>
                    <MyPageItem to={sign ? "/account" : "/login"}><CiUser size="20" fill='#8E6C62' /></MyPageItem>
                    <MyPageItem to="/"><CiShoppingCart size="20" fill='#8E6C62' /></MyPageItem>
                </MyPageCol>
            </HeaderCol>
        </HeaderLayout>
    );
}

const HeaderLayout = styled.div`
    position: fixed;
    width: 100%;
    height: auto;
    display: block;
    background: #FFFFFF;
    border-top: 8px solid #8E6C62;
    border-bottom: 1px solid #ECECEC; 
    z-index: 90;
`;

const HeaderCol = styled.div`
    margin: 0 auto;
    padding: 0 8%;
    max-width: 83.875rem;
    min-height: 65px;
    box-sizing: content-box;
    overflow: hidden;
    display: grid;
    grid-template-columns: 250px 1fr 10%;
    align-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: 10% 1fr 10%;
        grid-template-rows: 1fr;
    }
`;

const LogoBox = styled.div`
    display: grid;
    align-items: center;
`;

const HeaderList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 1024px) {
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

const MobileHeaderMenuButton = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: grid;
        justify-content: end;
        cursor: pointer;
    }
`;

const MyPageCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
`;

const MyPageItem = styled(Link)`
    display: grid;
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;