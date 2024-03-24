import React from "react";
import styled from "styled-components";
import PictureContainer from "../../Picture";
import { HeaderImage } from "../../Image";
import logo from "../../../assets/brand/icons/jihun-logo-black.svg";

export default function LogoContainer() {
  return (
    <Container>
      <Link href="/" className="cmp-image__link">
        <PictureContainer>
          <HeaderImage src={logo} alt="JIHUN logo" />
        </PictureContainer>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
`;

const Link = styled.a`
  align-items: center;
  display: flex;

  @media only screen and (min-width: 1200px) {
    height: 43px;
    justify-content: center;
    width: 149px;
  }
`;