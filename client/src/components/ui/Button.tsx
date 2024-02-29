import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href?: string;
  buttonText?: string;
};

export default function Button({ href, buttonText }: ButtonProps) {
  return (
    <ButtonBox className='button button--secondary'>
    <ButtonLink href={href} className='cmp-button'>
      {buttonText}
    </ButtonLink>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled.a`
  align-items: center;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 48px;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  height: 40px;
  justify-content: center;
  margin-bottom: 0;
  padding: 0;
  text-decoration: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,.12);
    color: #000;
  }

  @media only screen and (min-width: 1200px) {
    width: 327px;

    &:hover {
      background-color: rgba(0,0,0,.12);
    }
  }
`;
