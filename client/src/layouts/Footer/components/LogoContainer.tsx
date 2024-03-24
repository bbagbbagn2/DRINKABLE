import React from "react";
import styled from "styled-components";
import { LogoContainer } from "../Container/FooterContainer";
import jihunLogo from "../../../assets/brand/icons/jihun-logo2-white.svg";

export default function Logo() {
  return (
    <LogoContainer>
      <Wrapper>
        <Picture>
          <Image
            src={jihunLogo}
            loading="lazy"
            alt="The DRINKABLE Logo"
            className="cmp-image__image"
          />
        </Picture>
      </Wrapper>
    </LogoContainer>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: fit-content;
`;

const Picture = styled.picture`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  display: block;
`;