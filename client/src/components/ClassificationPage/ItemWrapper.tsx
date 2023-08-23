import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { setScreenSize } from '../../utils';
interface Cocktail {
    id: number;
    name: string;
    profile: string;
}

export default function Classification(): JSX.Element {
    const [cocktail, setCocktail] = useState<Cocktail[]>([]);
    const [flavor, setFlavor] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect(() => {
        fetchCocktails();
    }, []);

    async function fetchCocktails() {
        try {
            const response = await axios.get('/info');
            setCocktail(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    async function handleFlavor(selectedFlavor: string) {
        try {
            const response = await axios.get('/flavor', { params: { flavor: selectedFlavor } });

            setCocktail(response.data);
            setFlavor(selectedFlavor);
        } catch (err) {
            console.log(err);
        }
    };

    async function handleAmount(selectedAmount: string) {
        try {
            const response = await axios.get('/amount', { params: { amount: selectedAmount } });

            setCocktail(response.data);
            setAmount(selectedAmount);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ItemListLayout>
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
                                    <ListItemLi className='dry' onClick={() => handleFlavor('dry')}>
                                        <ListItemLiLabel>드라이 칵테일</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='sour' onClick={() => handleFlavor('sour')}>
                                        <ListItemLiLabel>사워 칵테일</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='sweet' onClick={() => handleFlavor('sweet')}>
                                        <ListItemLiLabel>스위트 칵테일</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='hot' onClick={() => handleFlavor('hot')}>
                                        <ListItemLiLabel>핫 칵테일</ListItemLiLabel>
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
                                    <ListItemLi className='long' onClick={() => handleAmount('long')}>
                                        <ListItemLiLabel>롱 칵테일</ListItemLiLabel>
                                    </ListItemLi>
                                    <ListItemLi className='short' onClick={() => handleAmount('short')}>
                                        <ListItemLiLabel>숏 칵테일</ListItemLiLabel>
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
                                        <ListItemLiLabel>논알콜 칵테일</ListItemLiLabel>
                                    </ListItemLi>
                                </ListItemUl>
                            </ListItemWrapper>
                        </CategoryLi>
                    </CategoryUl>
                </CategoryWrapper>
            </div>
            <div>
                <h1>
                    <ClassficationParagraph fontSize='30px' lineHeight='1.25em'>
                        The Cocktails
                    </ClassficationParagraph>
                </h1>
                <ClassficationParagraph lineHeight='1.5em'>
                    진, 럼, 보드카, 위스키, 데킬라 칵테일, 스페셜티 리큐어 등 다양한 종류의 음료를 만나볼 수 있습니다.
                </ClassficationParagraph>
                <ItemBox>
                    {cocktail.map((cocktail) => (
                        <div key={cocktail.id}>
                            <ItemLink to="#">
                                <ItemImageBox />
                                <SummaryBox>
                                    <SummaryParagraph marginTop='10px' fontSize='16px'><b>{cocktail.name}</b></SummaryParagraph>
                                    <SummaryParagraph marginTop='7px' fontSize='14px'>{cocktail.profile}</SummaryParagraph>
                                </SummaryBox>
                            </ItemLink>
                        </div>
                    ))}
                </ItemBox>
            </div>
        </ItemListLayout>
    );
};

const ItemListLayout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
    margin-top: 60px;
`;

const ClassficationParagraph = styled.p<{ fontSize?: string; lineHeight?: string; }>`
    margin: 30px 20% 0;
    text-align: center;
    color: #8E6C62;

    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
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
const ItemBox = styled.div`
    margin-top: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    row-gap: 35px;
    place-items: center;
    background: #FFFFFF;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    }
    `;

const ItemImageBox = styled.div`
    width: 300px;
    height: 350px;    
    display: grid;
    align-items: center;
    background: pink;
    background-blend-mode: normal;
    border-bottom: 5px solid transparent;
    transition: ease 0.2s;

    &:hover {
        border-bottom-color: #8E6C62;
    }

    @media (max-width: 1024px) {
        width: 100px;
        height: 150px;
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