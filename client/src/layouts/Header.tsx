import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/brand/icons/jihun-logo-black.svg";

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
  const isProjectssPage = location.pathname === "/projects";

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
                            href="/projects"
                            role="button"
                            className={isProjectssPage ? "active-element" : ""}
                          >
                            Projects
                          </a>
                        </b>
                      </li>
                      <li className="has-submenu">
                          <a
                            href="/about-me"
                            role="button"
                            data-text="Our Company"
                            aria-expanded="false"
                          >
                            About me
                          </a>
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

  & > .cmp-container {
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

  & .image {
    margin: 0;

    img {
      height: auto;
      max-width: 125px;
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 80px;

    & > .cmp-container {
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

const HeaderNavigation = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  & > .cmp-container {
    width: 100%;
    height: 100%;
    padding-inline: 24px;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    & > .cmp-container {
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

    & > li {
      margin: 0 20px;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      color: #000;
      font: 600 14px/17px "Noto-Sans", "Montserrat";
      letter-spacing: 0;
      text-decoration: none;

      &:hover {
        font-weight: 700;

        & > a {
          font-weight: 700;

          &::before {
            display: block;
          }
        }

        a::before {
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
      }

      > a {
        flex-direction: column;
        justify-content: center;

        &::after {
          content: attr(data-text);
          display: block;
          font: inherit;
          font-weight: 700;
          height: 0;
          overflow: hidden;
          visibility: hidden;
        }
      }

      a {
        align-items: center;
        color: #000;
        cursor: pointer;
        display: flex;
        font: 600 14px/17px "Noto-Sans", "Montserrat";
        height: 100%;
        letter-spacing: 0;
        position: relative;
        text-decoration: none;

        &::before {
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

          &::before{
            display: block;
          }
        }
      }
    }
  }
`;