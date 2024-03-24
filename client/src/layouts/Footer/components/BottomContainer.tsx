import React from "react";
import styled from "styled-components";
import { BottomContainer } from "../Container/FooterContainer";

export default function Bottom() {
  return (
    <BottomContainer>
      <TextWrapper>
        <p>
          <b>© 2023 JIHUN by Jihun Park.</b>
        </p>
      </TextWrapper>
    </BottomContainer>
  );
}

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    color: #fff;
    margin: 0;
    text-decoration: none;
    font: 400 12px / 18px "Noto Sans KR", "Montserrat", sans-serif;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;
