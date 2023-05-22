import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import { Container } from "@material-ui/core";

export default function Flavor() {
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        axios.get('/info')
            .then(response => {
                setCocktail(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Page>
            <Container>
                    <InfiniteScroll
                        pageStart={0}
                        hasMore={true}
                    >
                        <Wrapper>
                        {cocktail.map((cocktail, idx) => (
                            <div key={idx}>
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
                        </Wrapper>
                    </InfiniteScroll>
            </Container>
        </Page>
    );
};

const Page = styled.div`
    background: #EDEAE3;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
    gap: 24px;
    justify-items: center;
`;

const ItemWrapper = styled.div`
    width: 282px;
    height: 282px;    
    display: inline-block;
    background: #FFFFFF;
    border: none;
`;

const ItemBox = styled.div`
    width: 282px;
    height: 282px;
    background: #FFFFFF;
    border: none;
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
