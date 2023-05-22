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
        <FlavorContainer>
            <MenuWrapper>
                <CategoryWrapper>
                    <CategoryList>
                        <ListWrapper>
                            <CategoryItems className='dry' onClick={() => handleClick('dry')} />
                            <span>DRY</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems className='fruit' onClick={() => handleClick('fruit')} />
                            <span>FRUIT</span>
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
            </MenuWrapper>
            <ItemListWrapper>
                {cocktail.map((cocktail) => (
                    <div key={cocktail.id}>
                        <Link to="#">
                            <ItemWrapper>
                                <ItemBox>
                                    <TitleWrapper>
                                        <Title>{cocktail.name}</Title>
                                    </TitleWrapper>
                                </ItemBox>
                            </ItemWrapper>
                        </Link>
                    </div>
                ))}
            </ItemListWrapper>
        </FlavorContainer>
    );
};

const FlavorContainer = styled.div`
        width: 100%;
        display: grid;
        grid-template-rows: 200px 1fr;
        align-items: center;
        justify-items: center;
    `

const MenuWrapper = styled.div`
        padding: 5% 0;
        width: 50vw;
        height: 90px;
        display: grid;
        justify-items: center;
    `

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

const TitleWrapper = styled.div`
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

const Title = styled.div`
        position: absolute;    
        top: 50%;
        left: 50%;
        width: fit-content;
        font-size: 20px;
        transform: translate(-50%, -50%);
        text-align: center;
    `;
