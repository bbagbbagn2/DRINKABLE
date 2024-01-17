import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    href: string;
    bgColor: string;
    children: ReactNode;
}

export default function Button({ href, children, bgColor }: ButtonProps) {
    return (
        <ButtonBox>
            <ButtonLink href={href} bgColor={bgColor}>
                {children}
            </ButtonLink>
        </ButtonBox>
    )
}


const ButtonBox = styled.div`
    border: 1px solid transparent;
    text-align: right;
    color: #fff;

    @media screen and (max-width: 767.98px){
        padding: 0 87px;
        width: 100%;
        font-size: 15px;
    }
`;

const ButtonLink = styled.a<{ bgColor: string}>`
    padding: 15px 20px;
    min-width: 180px;
    display: block;
    border: 1px solid #000;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => (props.bgColor === '#000' ? '#fff' : '#000')};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s;

    :hover {
        opacity: 0.6;
    }

    @media screen and (max-width: 767.98px){
        padding: 12px 0;
        width: 100%;
        min-width: 20px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 800;
    }
`;
