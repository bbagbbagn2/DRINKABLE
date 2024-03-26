import React from "react";
import styled from "styled-components";

type TitleProps = {
  children?: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <TitleContainer>{children}</TitleContainer>;
}

const TitleContainer = styled.div`
  h1 {
    color: #000;
    margin-bottom: 0;
    margin-top: 56px;
    text-align: center;

    @media only screen and (min-width: 1200px) {
      margin-top: 120px;
    }
  }
`;
