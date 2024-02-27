import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../../layouts/Header";
import Footer from '../../layouts/Footer';
import Title from "../../components/ui/Title";

import ProjectsListComponent from '../../components/ui/BrandsItemComponent';

import icondb from '../../assets/images/projects/icondb logo.png'

export default function Projects() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <div className="container responsivegrid">
            <div className="cmp-container">
                <Title titleProps="Projects" marginTop="120px" mobileMarginTop="56px" />
                <ProjectsList className="container responsivegrid projects-list">
                  <div className="cmp-container">
                    <ProjectsListComponent href="/projects/icondb" alt="ICONDB" src={icondb} />
                  </div>
                </ProjectsList>
            </div>
          </div>
          <div className="container responsivegrid">
            <div className="cmp-container" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const ProjectsList = styled.div`
  margin-inline: -16px;

  .cmp-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin-inline: auto;

    >.adaptiveImage {
      margin-top: 32px;
      padding-inline: 8px;
      width: 50%;
    }

    .cmp-image {
      height: 0;
      padding-bottom: 100%;
      position: relative;
      width: 100%;

      ::before {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 14px 24px rgba(0,0,0,.06);
        content: "";
        display: block;
        inset: 0;
        position: absolute;
        transition: all .2s ease-out;
      }
    }

    .cmp-image__link {
      inset: 0;
      padding: 24px;
      position: absolute;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -8px;

    .cmp-container {
      margin-inline: auto;
      width: 75%;

      >.adaptiveImage {
        padding-inline: 16px;
        width: 33.3333333333%;
      }

      .cmp-image:hover::before {
        box-shadow: 0 14px 24px 0 rgba(0,0,0,.1);
        inset: -8px;
      }
    }

    .cmp-image__link {
      padding: 32px;
    }
  }
`;
