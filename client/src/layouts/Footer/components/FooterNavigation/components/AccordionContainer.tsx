import React from "react";
import styled from "styled-components";
import { AccordionContainer } from "../../../Container/FooterContainer";

type AccordionProps = {
  title: string;
  href: string;
  description: string;
};
export default function Accordion({
  title,
  href,
  description,
}: AccordionProps) {
  return (
    <AccordionContainer>
      <TextWrapper>
        <Heading>{title}</Heading>
        <AccordionList>
          <AccordionItem>
            <AccordionLink href={href}>{description}</AccordionLink>
          </AccordionItem>
        </AccordionList>
      </TextWrapper>
    </AccordionContainer>
  );
}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Heading = styled.h2`
  color: #d5d5d5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0;
  margin-top: 0;
  font: 700 20px / 28px "Noto Sans KR", "Montserrat", sans-serif;

  @media only screen and (min-width: 600px) {
    cursor: auto;
    font-size: 10px;
    font-weight: 700;
    margin: 0 0 24px;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
  }
`;

const AccordionList = styled.ul`
  display: none;
  list-style: none;
  line-height: 26px;
  padding: 0;

  @media only screen and (min-width: 600px) {
    display: block;
    margin: 0;
  }
`;

const AccordionItem = styled.li`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0 0;
  text-decoration: none;

  &:first-of-type {
    margin-top: 0;
  }
`;

const AccordionLink = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0 0;
  text-decoration: none;
`;
