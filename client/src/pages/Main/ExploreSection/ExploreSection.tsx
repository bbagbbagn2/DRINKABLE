import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../../../components/SectionTitle';
import Button from '../../../components/Button';

export default function BannerSection() {

    return (
        <SessionBox>
            <SectionTitle title="Explore DRINKABLE" useLinkTitle={false} />
            <ExploreBox>
                <LeftBox>
                    <ul>
                        <li>
                            <div>
                                <ExploreLink href="">
                                    Flavor<br />전체보기
                                </ExploreLink>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ExploreLink href="">
                                    Amount<br />전체보기
                                </ExploreLink>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ExploreLink href="">
                                    논알콜<br />전체보기
                                </ExploreLink>
                            </div>
                        </li>
                    </ul>
                </LeftBox>
                <RightBox>
                    <ExploreLink href="/login">
                        마이페이지
                    </ExploreLink>
                </RightBox>
            </ExploreBox>
        </SessionBox>
    );
}

const SessionBox = styled.div`
    position: relative;
    margin: 0 auto 50px;
    max-width: 1440px;
    display: block !important;

    @media (min-width: 769px) {
        display: block;
    }
`;

const ExploreBox = styled.div`
    display: flex;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;

const LeftBox = styled.div`
    max-width: 50%;
    flex-basis: 50%;

    ul {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;

        li {
            width: 33.33%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid #000;

            :first-child {
            border-left: 0;
            }

            :last-child {
                border-right: 1px solid #000;
            }

            > div {
                padding: 30px 30px;
            }
        }
    }
`;

const ExploreLink = styled.a`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;

    :hover {
        text-decoration: underline;
        opacity: 0.7;
    }
`;

const RightBox = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;