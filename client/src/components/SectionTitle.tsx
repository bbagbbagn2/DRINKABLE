import React from 'react';
import styled from 'styled-components';

import { theme } from '../styles/theme';
import { BsArrowRight } from "react-icons/bs";

type SectionTitleProps = {
    title?: string;
    desc?: string;
    useLinkTitle?: boolean;
}

export default function SectionTitle({ title, desc, useLinkTitle }: SectionTitleProps) {
    return (
        <SessionBox>
            <TitleBox>
                <Title>
                    {title && <p>{title}</p>}
                </Title>
                {useLinkTitle && (
                    <LinkTitle>
                        <a href='/'>
                            <BsArrowRight />
                            {desc && <p>{desc}</p>}
                        </a>
                    </LinkTitle>
                )}
            </TitleBox>
        </SessionBox>
    );
};

const SessionBox = styled.div`
    margin: 0 auto 50px;
    margin-bottom: 0;
    padding: 0 0 20px;
    position: relative;
    max-width: 1440px;

    @media screen and (max-width: 767.98px) {
        margin-bottom: 6px;
        padding: 20px 2% 0;
    }

    @media screen and (min-width: 768px) {
        display: block;
    }
`;

const TitleBox = styled.div`
    padding: 0 2%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    a {
        display: flex;
        align-items: center;
        font-weight: 600;

        :hover {
            text-decoration: underline;
            opacity: 0.7;
        }
        svg {
            margin-right: 5px;
        }
    }

    @media screen and (max-width: 767.98px) {
        margin-top: 13px;
    }
`;

const Title = styled.div`
    margin-bottom: 12px;
    color: ${theme.colors.black};
    font-size: 36px;
    font-weight: 700;
    line-height: 1.25;

    @media screen and (max-width: 767.98px) {
        margin-top: 4px;
        font-size: 24px;
        line-height: 28px;
    }
`;

const LinkTitle = styled(Title)`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
    
    @media screen and (max-width: 767.98px) {
        margin: 0;
        margin-bottom: 20px;
        font-size: 12px;
        font-weight: 800;
        line-height: 21px;
    }
`;