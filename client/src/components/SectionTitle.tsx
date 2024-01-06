import React from 'react';
import styled from 'styled-components';

import { theme } from '../styles/theme';

type SectionTitleProps = {
    title?: string;
    desc?: string; 
}

export default function SectionTitle({ title, desc }: SectionTitleProps) {
    return (
        <SessionBox>
            <TitleBox>
                <Title>
                    {title && <p>{title}</p>}
                </Title>
                <LinkTitle>
                    <a href='/'>
                        {desc && <p>{desc}</p>}
                    </a>
                </LinkTitle>
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

    @media (min-width: 767px) {
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
    }
`;

const Title = styled.div`
    margin-bottom: 12px;
    color: ${theme.colors.black};
    font-size: 36px;
    font-weight: 700;
    line-height: 1.25;
`;

const LinkTitle = styled(Title)`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
`;