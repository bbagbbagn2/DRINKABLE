import React from "react";
import styled from "styled-components";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import main from '../../assets/images/background.jpg'

export default function Qrllergy() {
  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <ImageContainer className="adaptiveImage image">
            <div className="cmp-adaptive-image cmp-image" itemScope>
                <picture className="visible loaded">
                    <img src={main} className="cmp-image__image" loading="lazy" itemProp="contentUrl" alt="" />
                </picture>
            </div>
          </ImageContainer>
          <div className="text">
            <div className="cmp-text">
                <Heading>QRLLERGY</Heading>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const ImageContainer = styled.div`
  margin-top: 24px;

  @media only screen and (min-width: 1200px) {
    margin-top: 32px;
  }
`;

const Heading = styled.h1`
    text-align: center;
`