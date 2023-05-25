import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

export default function Flavor() {
    const [cocktail, setCocktail] = useState([]);
    const [flavor, setFlavor] = useState('');

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

    const handleClick = async (selectedFlavor) => {
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
                <Title>The Cocktails</Title>
                <SubTitle>
                    Looking for a cocktail? Welcome.
                    From easy mixed drinks to classic cocktails, we have just about anything you've heard of.
                    Try our full range of drinks including gin, rum, vodka, whiskey, tequila cocktails and specialty liqueurs.
                </SubTitle>
                {/*
                <CategoryWrapper>
                    <CategoryList>
                        <ListWrapper>
                            <CategoryItems className='dry' onClick={() => handleClick('dry')} />
                            <span>DRY</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='sour' onClick={() => handleClick('sour')} />
                            <span>SOUR</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='sweet' onClick={() => handleClick('sweet')} />
                            <span>SWEET</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='hot' onClick={() => handleClick('hot')} />
                            <span>HOT</span>
                        </ListWrapper>
                    </CategoryList>
                </CategoryWrapper>
                */}
            </div>
            <SearchWrapper>
                <SearchInput placeholder='Search Cocktails...' />
                <SortByWrapper>
                <SortBySelect>
                    <SortByOption>Sort by</SortByOption>
                    <SortByOption>Dry</SortByOption>
                    <SortByOption>Sour</SortByOption>
                    <SortByOption>Sweet</SortByOption>
                </SortBySelect>
                </SortByWrapper>
            </SearchWrapper>
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
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 20% 10% 1fr;
    align-items: center;
    justify-items: center;
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

const SearchWrapper = styled.div`
    margin-bottom: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 65% 1fr;
`;
const SearchInput = styled.input`
    margin: 0 32px 0 0;
    padding: 14px 30px 14px 16px;
    border: 1px solid #8E6C62;
    font-size: 18px;
    line-height: 24px;
`;

const SortByWrapper = styled.div`
    display: grid;
    justify-content: end;
`;

const SortBySelect = styled.select`
    box-sizing: inherit;
    appearance: none;
    padding: 0 40px 0 16px;
    width: fit-content;
    height: 54px;
    font-size: 18px;
    line-height: 1.2;
    color: #737373; 
}
`;

const SortByOption = styled.option`
    padding: 0 2px 1px;
    min-height: 1.2em;
    white-space: nowrap;
`;

const CategoryWrapper = styled.div`
        width: 100%;
        display: grid;
        place-items: center;
        background: #FFFFFF;
        border-radius: 70px 70px;
    `;

const CategoryList = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        column-gap: 25%;
    `;

const ListWrapper = styled.div`
        display: grid;
        place-items: center;
    `;

const CategoryItems = styled.div`
        width: 30px;
        height 30px;
        background: #C1ABA2;
        border: none;
        border-radius: 50%;
        transition: 0.3s;
        cursor: pointer;
        
        &:hover{
            background: black;
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
