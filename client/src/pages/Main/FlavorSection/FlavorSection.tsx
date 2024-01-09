import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../../../components/SectionTitle';
import CocktailBanner from './CocktailBanner';

const flavorData = [
    {
        href: '/',
        heading: 'SWEET',
        imageUrl: 'https://cocktailpartyapp.com/wp-content/uploads/Pina-Colada.webp',
    },
    {
        href: '/',
        heading: 'DRY',
        imageUrl: 'https://cocktailpartyapp.com/wp-content/uploads/Martini.webp',
    },
    {
        href: '/',
        heading: 'SOUR',
        imageUrl: 'https://cocktailpartyapp.com/wp-content/uploads/Whiskey-Sour.webp',
    },
    {
        href: '/',
        heading: 'HOT',
        imageUrl: 'https://cocktailpartyapp.com/wp-content/uploads/Hot-Toddy.webp',
    },
];

export default function FlavorSection() {
    return (
        <>
            <SectionTitle
                title="Drinks By Flavor"
                desc="칵테일 보러가기"
            />
            <SessionBox>
                <div className='main_best_box'>
                    {flavorData.map((flavor, index) => (
                        <CocktailBanner key={index} {...flavor} />
                    ))}
                </div>
            </SessionBox>
        </>
    );
}

const SessionBox = styled.div`
    margin: 0 auto 50px;
    position: relative;
    max-width: 1440px;

    .main_best_box {
        font-size: 0;

        a:hover {
            div {
                opacity: 0.7;
            }
        }
    }

    @media (min-width: 769px) {
        display: block;
    }
`;