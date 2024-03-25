import React, { ReactNode } from "react";
import styled from "styled-components";
type MenuLinkProps = {
  href: string;
  title: string;
  isCurrentPage?: boolean;
  isButton?: boolean;
  children?: ReactNode;
};

export default function MenuLink({
  href,
  title,
  isCurrentPage,
  isButton,
  children,
}: MenuLinkProps) {
  return (
    <>
      {isButton ? (
        <ButtonLink href={href} role="button" isCurrentPage={isCurrentPage}>
          {title}
          {children}
        </ButtonLink>
      ) : (
        <Link href={href} role="button" isCurrentPage={isCurrentPage}>
          {title}
        </Link>
      )}
    </>
  );
}

type LinkStyleProps = {
  isCurrentPage?: boolean;
};

const Link = styled.a<LinkStyleProps>`
  @media only screen and (min-width: 1200px) {
    align-items: center;
    color: #000;
    cursor: pointer;
    display: flex;
    font: 700 14px / 17px "Noto Sans KR", "Montserrat", sans-serif;
    height: 100%;
    letter-spacing: 0;
    position: relative;
    text-decoration: none;

    &::before {
      background-color: #eb3f3f;
      content: "";
      display: ${({ isCurrentPage }) => (isCurrentPage ? "block" : "none")};
      height: 4px;
      left: 50%;
      position: absolute;
      top: calc(100% - 4px);
      translate: -50% 0;
      width: 100%;
    }
  }
`;

const ButtonLink = styled(Link)`
  @media only screen and (min-width: 1200px) {
    flex-direction: column;
    justify-content: center;

    &::after {
      content: attr(data-text);
      display: block;
      font: inherit;
      font-weight: 700;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
`;

export { ButtonLink };