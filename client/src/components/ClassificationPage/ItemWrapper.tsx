import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

interface Cocktail {
    id: number;
    name: string;
    profile: string;
}

export default function Classification(): JSX.Element {
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
                    <CategoryTitle>CATEGORY</CategoryTitle>
                    <CategoryUl>
                        <CategoryLi>
                            <ListButton>
                                <ListSpan>Flavor</ListSpan>
                            </ListButton>
                            <ListItemWrapper>
                                <ListItemUl>
                                    <ListItemLi className='dry' onClick={() => handleClick('dry')}>
                                        <ListItemLiLabel>Dry</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='sour' onClick={() => handleClick('sour')}>
                                        <ListItemLiLabel>Sour</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='sweet' onClick={() => handleClick('sweet')}>
                                        <ListItemLiLabel>Sweet</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='hot' onClick={() => handleClick('hot')}>
                                        <ListItemLiLabel>Hot</ListItemLiLabel>
                                    </ListItemLi>
                                </ListItemUl>
                            </ListItemWrapper>
                        </CategoryLi>
                    </CategoryUl>
                    <CategoryUl>
                        <CategoryLi>
                            <ListButton>
                                <ListSpan>Amount</ListSpan>
                            </ListButton>
                            <ListItemWrapper>
                                <ListItemUl>
                                    <ListItemLi>
                                        <ListItemLiLabel>Long</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi>
                                        <ListItemLiLabel>Short</ListItemLiLabel>
                                    </ListItemLi>
                                </ListItemUl>
                            </ListItemWrapper>
                        </CategoryLi>
                    </CategoryUl>
                    <CategoryUl>
                        <CategoryLi>
                            <ListButton>
                                <ListSpan>Non-Alchoholic</ListSpan>
                            </ListButton>
                            <ListItemWrapper>
                                <ListItemUl>
                                    <ListItemLi>
                                        <ListItemLiLabel>Non-Alchoholic</ListItemLiLabel>
                                    </ListItemLi>
                                </ListItemUl>
                            </ListItemWrapper>
                        </CategoryLi>
                    </CategoryUl>
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
                            <ItemLink to="#">
                                <ItemWrapper />
                                <SummaryBox>
                                    <SummaryParagraph marginTop= '10px'fontSize='16px'><b>{cocktail.name}</b></SummaryParagraph>
                                    <SummaryParagraph marginTop= '7px' fontSize='14px'>{cocktail.profile}</SummaryParagraph>
                                </SummaryBox>
                            </ItemLink>
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

const CategoryTitle = styled.h2`
    margin: 0;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid gray; 
    color: #8E6C62;
    font-size: 26px;
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

const CategoryUl = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    `;

const CategoryLi = styled.li`
    padding: 20px 0;
    border-bottom: 1px solid #8E6C62;
`;
const ListButton = styled.button`
    padding: 0;
    width: 100%;
    display: grid;
    justify-content: space-between;
    font-family: inherit;
    font-size: 16px;
    line-height: 28px;
    cursor: pointer;
    background: none;
    border: 0;
    outline: 0;
`;

const ListSpan = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: eclipsis;
    margin-inline-end: 10px;
`;

const ListItemWrapper = styled.div`
    margin-top: 15px;
`;

const ListItemUl = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const ListItemLi = styled.li`
    transition: 0.3s;
    cursor: pointer;
    
    &:hover{
        color: #8E6C62;
    }
    `;

const ListItemLiLabel = styled.label`
    display: block;
    font-size: 14px;
    line-height: 1.7;
    cursor: pointer;
    opacity: 0.8;
`;
const ItemListWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    row-gap: 35px;
    place-items: center;
    background: #FFFFFF;
    `;

const ItemWrapper = styled.div`
    width: 300px;
    height: 350px;    
    display: grid;
    align-items: center;
    background: pink;
    background-blend-mode: normal;
    border-bottom: 5px solid transparent;
    transition: ease 0.2s;

    &:hover {
        border-bottom-color: #000000;
    }
    `;

const SummaryBox = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    `;

const SummaryParagraph = styled.p<{ marginTop?: string; fontSize?: string; lineHeight?: string; }>`
    margin: 0;

    margin-top: ${props => props.marginTop}; 
    font-size: ${props => props.fontSize};
`;

const ItemLink = styled(Link)`
    display: grid;
    place-items: center;
    place-content: center;
    color: #000000;
`