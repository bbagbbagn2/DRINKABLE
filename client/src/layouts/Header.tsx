import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/brand/logo-black.svg";
import { theme } from "../styles/theme";

import { AiOutlineMenu } from "react-icons/ai";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
import { CiSearch, CiStar, CiUser } from "react-icons/ci";
import axios from "axios";

interface profileData {
  username: string;
}

export default function Header() {
  const [sign, setSign] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<profileData>({
    username: "admin_user",
  });
  const GET_AUTH_URL = "/get_auth";
  const GET_PROFILE_URL = "/get_profile";

  const fetchData = async () => {
    try {
      const authResponse = await axios.post<string>(GET_AUTH_URL);
      const userData = authResponse.data;
      setSign(userData);

      const profileResponse = await axios.post<profileData[]>(GET_PROFILE_URL, {
        user: userData,
      });
      setProfileData(profileResponse.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();
  const isAllergiesPage = location.pathname === "/allergies";

  return (
    <header className="experincefragment">
      <div className="cmp-experincefragment">
        <div className="cmp-container">
          <div className="header">
            <HeaderWrapper className="header-wrapper">
              <div className="cmp-container">
                <div className="adaptiveImage image">
                  <ImageLink href="/" className="cmp-image__link">
                    <picture>
                      <source media="(min-width: 1200px)" />
                      <Image
                        src={logo}
                        loading="lazy"
                        alt="QRLLERGY Logo"
                        itemProp="contentUrl"
                      />
                    </picture>
                  </ImageLink>
                </div>
                <HeaderNavigation>
                  <div className="cmp-container">
                    <TextList>
                      <li>
                        <b>
                          <a
                            href="/allergies"
                            role="button"
                            className={isAllergiesPage ? "active-element" : ""}
                          >
                            Allergies
                          </a>
                        </b>
                      </li>
                    </TextList>
                  </div>
                </HeaderNavigation>
              </div>
            </HeaderWrapper>
            <div id='maincontent' />
          </div>
        </div>
      </div>
    </header>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #fff;

  > .cmp-container {
    align-items: center;
    display: flex;
    height: 72px;
    justify-content: center;
    margin-inline: 24px;
    max-width: none;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }

  .image {
    margin: 0;

    img {
      height: auto;
      max-width: 125px;
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 80px;

    > .cmp-container {
      margin-inline: auto;
      max-width: 1280px;
      height: 80px;
    }
  }
`;

const ImageLink = styled.a`
  display: flex;
  align-items: center;
  -webkit-box-pack: center;

  @media only screen and (min-width: 1200px) {
    width: 149px;
    height: 43px;
    justify-content: center;
    -webkit-box-pack: center;
  }

  picture {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;

    img {
      display: block;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const HambergerBox = styled.div`
  display: none;

  @media screen and (max-width: 767.98px) {
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

const HeaderNavigation = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  > .cmp-container {
    width: 100%;
    height: 100%;
    padding-inline: 24px;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    > .cmp-container {
      padding: 0;
      width: calc(100% - 350px);
      min-width: 418px;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-inline-start: 24px;
  }
`;

const TextList = styled.ul`
  @media only screen and (min-width: 1200px) {
    margin: 0;
    padding: 0;
    height: 80px;
    display: flex;
    align-items: center;
    list-style-type: none;

    > li {
      margin: 0 20px;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      color: #000;
      font: 600 14px/17px "Noto-Sans", "Montserrat";
      letter-spacing: 0;
      text-decoration: none;

      a {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        color: #000;
        font: 600 14px/17px "Noto-Sans", "Montserrat";
        letter-spacing: 0;
        text-decoration: none;
        cursor: pointer;

        ::before {
          background-color: #000;
          content: "";
          display: none;
          height: 4px;
          left: 50%;
          position: absolute;
          top: calc(100% - 4px);
          translate: -50% 0;
          width: 100%;
        }

        &.active-element {
          font-weight: 700;

          ::before{
            display: block;
          }
        }
      }
    }
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

  &:hover {
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

  @media screen and (max-width: 1025.98px) {
    span {
      display: none;
    }
  }
`;
