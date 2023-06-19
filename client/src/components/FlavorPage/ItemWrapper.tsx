import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

interface Cocktail {
    id: number;
    name: string;
}
export default function Flavor() {
    const [cocktail, setCocktail] = useState<Cocktail[]>([]);
    const [flavor, setFlavor] = useState<string>('');

    useEffect(() => {
        fetchCocktails();
    }, []);

    const fetchCocktails = async () => {
        try {
            const response = await axios.get('/info');
            setCocktail(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (selectedFlavor: string) => {
        try {
            const response = await axios.get('/flavor', { params: { flavor: selectedFlavor } });
            setCocktail(response.data);
            setFlavor(selectedFlavor);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <div>
                <CategoryWrapper>
                    <CategoryList>
                    <Title>FLAVOR</Title>
                        <ListWrapper>
                            <CategoryItems className='dry' onClick={() => handleClick('dry')}>
                            <span>DRY</span>
                            </CategoryItems>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='sour' onClick={() => handleClick('sour')}>
                            <span>SOUR</span>
                            </CategoryItems>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='sweet' onClick={() => handleClick('sweet')}>
                            <span>SWEET</span>
                            </CategoryItems>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='hot' onClick={() => handleClick('hot')}>
                            <span>HOT</span>
                            </CategoryItems>
                        </ListWrapper>
                    </CategoryList>
                </CategoryWrapper>
            </div>
            <div>
                <Title>The Cocktails</Title>
                <SubTitle>
                    Looking for a cocktail? Welcome.
                    From easy mixed drinks to classic cocktails, we have just about anything you've heard of.
                    Try our full range of drinks including gin, rum, vodka, whiskey, tequila cocktails and specialty liqueurs.
                </SubTitle>
                <ItemListWrapper>
                    {cocktail.map((cocktail) => (
                        <div key={cocktail.id}>
                            <Link to="#">
                                <ItemWrapper>
                                    <ItemBox>
                                        <ItemTitleWrapper>
                                            <ItemTitle>{cocktail.name}</ItemTitle>
                                        </ItemTitleWrapper>
                                    </ItemBox>
                                </ItemWrapper>
                            </Link>
                        </div>
                    ))}
                </ItemListWrapper>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
    margin-top: 60px;
`;

const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: #8E6C62;
    font-size: 46px;
    line-height: 1.25em;
`;

const SubTitle = styled.p`
    margin: 30px 20% 0;
    text-align: center;
    color: #8E6C62;
    font-size: 16px;
    line-height: 1.5em;
`;

const CategoryWrapper = styled.div`
    position: fixed;
    display: grid;
    background: #FFFFFF;
    `;

const CategoryList = styled.div`
    display: grid;  
    grid-template-rows: repeat(5, 1fr);
    column-gap: 25%;
    `;

const ListWrapper = styled.div`
    display: grid;
    align-items: center;
    border-bottom: 1px solid #000000;
    `;

const CategoryItems = styled.div`
    transition: 0.3s;
    cursor: pointer;
    
    &:hover{
        color: #8E6C62;
    }
    `;

const ItemListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(315px,1fr));
    row-gap: 35px;
    place-items: center;
    background: black;
    `;

const ItemWrapper = styled.div`
    width: 282px;
    height: 282px;    
    display: grid;
    align-items: center;
    background: #FFFFFF;
    background-blend-mode: normal;
    `;

const ItemBox = styled.div`
    width: 282px;
    height: 282px;
    background: #FFFFFF;
    `;

const ItemTitleWrapper = styled.div`
    position: relative;
    width: 282px;
    height: 282px;
    background: #C1ABA2;
    color: #292929;
    opacity: 0;
    transition: .5s ease;

    &:hover { 
        opacity: 0.8;
    }
    `;

const ItemTitle = styled.div`
    position: absolute;    
    top: 50%;
    left: 50%;
    width: fit-content;
    font-size: 20px;
    transform: translate(-50%, -50%);
    text-align: center;
    `;
