import React from "react";
import styled from "styled-components";

type TitleProps = {
  titleProps?: string;
  marginTop?: string;
  mobileMarginTop?: string;
};

export default function Title({ titleProps, marginTop, mobileMarginTop }: TitleProps) {
  return (
    <div className="title">
      <div className="cmp-title">
        <TitleHeading className='cmp-title__text' marginTop={marginTop} mobileMarginTop={mobileMarginTop}>{titleProps}</TitleHeading>
      </div>
    </div>
  );
}

const TitleHeading = styled.h1<{ marginTop?: string, mobileMarginTop?: string }>`
  margin-bottom: 0;
  text-align: center;
  margin-top: ${(props) => props.mobileMarginTop && props.mobileMarginTop};;
  color: #000;

  @media only screen and (min-width: 1200px) {
    margin-top: ${(props) => props.marginTop && props.marginTop};
  }
`;
