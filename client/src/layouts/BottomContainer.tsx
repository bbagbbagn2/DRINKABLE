import React from "react";
import styled from "styled-components";

import "../styles/Footer.css";

export default function BottomContainer() {
  return (
    <Container>
      <TextWrapper>
        <p>
          <b>© 2023 JIHUN by Jihun Park.</b>
        </p>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  margin-top: 32px;
  min-width: 100%;
  padding-inline: 8px;

  @media only screen and (min-width: 600px) {
    padding-inline: 12px;
  }

  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
    flex-grow: 1;
    justify-content: flex-end;
    flex: 0 0 50%;
    min-width: 50%;
    padding-inline: 16px;
    margin-top: 48px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    color: #fff;
    margin: 0;
    text-decoration: none;
    font: 400 12px / 18px 'Noto Sans KR', 'Montserrat', sans-serif;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;
