import React from "react";
import styled from "styled-components";
import Logo from "../assets/brand/icons/jihun-logo2-white.svg";

export default function LogoContainer() {
  return (
    <Container>
      <Wrapper>
        <Picture>
          <Image
            src={Logo}
            loading="lazy"
            alt="The DRINKABLE Logo"
            className="cmp-image__image"
          />
        </Picture>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 0;
  margin-top: 0;
  flex: 0 0 100%;
  min-width: 100%;
  height: 40px;
  order: -2;
  padding-inline: 8px;

  @media screen and (min-width: 600px) {
    flex: 0 0 50%;
    min-width: 50%;
    padding-inline: 12px;
  }

  @media screen and (min-width: 1200px) {
    padding-inline: 16px;
  }
`;

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