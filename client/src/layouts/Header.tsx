import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import { theme } from '../styles/theme';

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
        <header>
            <HeaderContainer>
                <HeaderBox>
                    <HeaderNav className='nav'>
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
                                <CiSearch size="20" />
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
    padding: 0;
    max-width: 1440px;
    display: flex;

    @media screen and (max-width: 60.063rem) {
        padding: 0 1.25rem;
        min-height: 3.1875rem;
        display: grid;
        grid-template-columns: 11% 1fr 10%;
        justify-content: center;
    }       
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

    @media screen and (max-width: 60.063rem) {
        padding-top: 1.375rem;
        padding-bottom: 1.375rem;
    }

    @media screen and (max-width: 37.563rem) {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
`;