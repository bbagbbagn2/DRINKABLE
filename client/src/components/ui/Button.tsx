import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href?: string;
  buttonText?: string;
};

export default function Button({ href, buttonText }: ButtonProps) {
  return (
    <ButtonBox href={href}>
      <span>{buttonText}</span>
    </ButtonBox>
  );
}

const ButtonBox = styled.a`
  margin: 24px 0 0;
  padding: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 48px;
  background-color: transparent;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  text-decoration: none;

  span {
    margin-top: 1px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 32px;
    width: 327px;

    &:hover {
      background-color: transparent;
      border-color: #6e6e6e;
      color: #6e6e6e;
    }
  }
`;
