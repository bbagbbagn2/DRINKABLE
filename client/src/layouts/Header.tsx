import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import { theme } from '../styles/theme';

import { AiOutlineMenu } from "react-icons/ai";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
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
        <header id='header'>
            <HeaderContainer>
                <HeaderBox>
                    <HeaderNav className='nav'>
                        <HambergerBox>
                            <HambererLink href="/">
                                <MdMenu size='28'/>
                            </HambererLink>
                        </HambergerBox>
                        <div className='left' onClick={() => handleScroll(0)}>
                            <div className='logo'>
                                <Logo />
                            </div>
                            <MenuBox>
                                <ul>
                                    <li>
                                        <MenuItem href="/" onClick={() => handleScroll(0)}>HOME</MenuItem>
                                    </li>
                                    <li>
                                        <MenuItem href="/" onClick={() => handleScroll(680)}>ABOUT</MenuItem>
                                    </li>
                                    <li>
                                        <MenuItem href="/classfication">CLASSFICATION</MenuItem>
                                    </li>
                                </ul>
                            </MenuBox>
                        </div>

                        <div className='right'>
                            <ul>
                                <li>
                                    <MenuItem href={sign ? "/account" : "/login"}><CiUser size="20" fill='#000' /></MenuItem>
                                </li>
                                <li>
                                    <MenuItem href="/wishlists"><CiStar size="20" fill='#000' /></MenuItem>
                                </li>
                            </ul>
                            <SearchBox>
                                <span>검색</span>
                                <MdSearch size="28" />

                            </SearchBox>
                        </div>
                    </HeaderNav>
                </HeaderBox>
            </HeaderContainer>
        </header>
    );
}

const HeaderContainer = styled.div`
    position: relative;
    height: 60px;
    background: ${theme.colors.white};
    z-index: 13;

    @media screen and (max-width: 767.98px){
      height: 50px;
    }
`;

const HeaderBox = styled.div`
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
    background: ${theme.colors.white};
    border-bottom: 1px solid #e5e5e5;
    clear: both;

    .nav {
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            position: relative;
        }
    }

    .right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                margin-right: 20px;
            }
        }
    }

    @media screen and (max-width: 767.98px) {
        border-bottom: 1px solid #e5e5e5;

        .left {
            padding: 0;
        }

        .right {
            margin-right: 16px;

            li {
                display: none;
            }
        }
    }
`;

const HambergerBox = styled.div`
    display: none;
    
    @media screen and (max-width: 767.98px){
        margin-left: 16px;
        display: flex;
        font-size: 0;
    }

    svg {
        padding: 2px;
        fill: currentColor;
    }
`;

const HambererLink = styled.a`
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderNav = styled.div`
    margin: 0 auto;
    padding: 0;
    max-width: 1440px;
    display: flex;
`;

const MenuBox = styled.div`
    margin-left: 11px;

    ul {
        height: 60px;
        display: flex;
        align-items: center;
        line-height: 60px;

        :hover {
            li a {
                opacity: 0.5;

                :hover {
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 60.063rem) {
        display: none;
    }
`;

const MenuItem = styled.a`
    padding: 0 11px;
    position: relative;
    display: block;
    color: ${theme.colors.black};
    font-size: 14px;
    font-weight: 600;
    transition: opacity 0.4s cubic-bezier(0.4, 0.9, 0.3, 1);
    
    &:hover{
        text-decoration: none;
        outline: none;
    }
`;

const SearchBox = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    width: 250px;
    min-width: 2.25rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 767.98px) {
        padding: 0;
        width: auto;
        height: 50px;
        background-color: ${theme.colors.white};

        svg {
            color: ${theme.colors.black};
        }
    }

    @media screen and (max-width: 1025.98px){
        span {
            display: none;
        }
    }
`;