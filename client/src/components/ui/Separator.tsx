import React from "react";
import styled from "styled-components";

export default function Separator() {
  return (
    <Wrapper>
      <SeparatorHr />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 56px;

  @media only screen and (min-width: 1200px) {
    margin-top: 64px;
  }
`;

const SeparatorHr = styled.hr`
  border: 0;
  border-top: 1px solid #d5d5d5;
`;
