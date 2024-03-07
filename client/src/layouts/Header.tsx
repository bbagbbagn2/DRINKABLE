import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/brand/icons/jihun-logo-black.svg";

import axios from "axios";

import "../styles/Header.css";

import { MdMenu } from "react-icons/md";

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
  const isAboutmePage = location.pathname === "/about-me";
  const isProjectsPage = location.pathname.includes("/projects");

  return (
    <header className="experincefragment">
      <div className="cmp-experincefragment">
        <div className="cmp-container">
          <div className="header">
            <div className="header-wrapper">
              <div className="cmp-container">
                <div className="adaptiveImage image">
                  <div>
                    <div className="cmp-adaptive-image cmp-image">
                      <a href="/" className="cmp-image__link">
                        <picture>
                          <source media="(min-width: 1200px)" />
                          <img
                            src={logo}
                            loading="lazy"
                            alt="QRLLERGY Logo"
                            itemProp="contentUrl"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="header__navigation">
                  <div className="cmp-container">
                    <div className="text">
                      <div>
                        <div className="cmp-text">
                          <ul>
                            <li>
                              <b>
                                <a
                                  href="/about-me"
                                  role="button"
                                  className={
                                    isAboutmePage ? "active-element" : ""
                                  }
                                >
                                  About me
                                </a>
                              </b>
                            </li>
                            <li className="has-submenu">
                              <a
                                href="/projects"
                                role="button"
                                data-text="About me"
                                aria-expanded="false"
                                className={
                                  isProjectsPage ? "active-element" : ""
                                }
                              >
                                Projects
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/projects/icondb" data-text='ICONDB Project'>ICONDB Project</a>
                                </li>
                                <li>
                                  <a href="/projects/pjh-portfolio" data-text='PJH-Portfolio Project'>PJH-Portfolio Project</a>
                                </li>
                                <li>
                                  <a href="/projects/jihun" data-text='JIHUN Project'>JIHUN Project</a>
                                </li>
                              </ul> 
                            </li>
                            <li>
                              <b>
                                <a
                                  href="/"
                                  role="button"
                                  className={
                                    isAboutmePage ? "active-element" : ""
                                  }
                                >
                                  Resume
                                </a>
                              </b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header__buttons-wrapper">
                  <div className="cmp-container">
                    <div className="button header__menu-button header__button--separator-hidden">
                      <div className="cmp-container">
                        <button className="cmp-button" aria-label="Menu">
                        <MdMenu size="24"/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="maincontent" />
          </div>
        </div>
      </div>
    </header>
  );
}