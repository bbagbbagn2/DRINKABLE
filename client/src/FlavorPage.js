import React, { useEffect, useState, useRef } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import styled from "styled-components";
import Header from "./components/Header/Header";
import axios from "axios";

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

    useEffect(() => {
        function setScreenSize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        setScreenSize();
    }, []);


    return (<>
        <Header />
        <MainPage>
            <Container>
                <CategoryWrapper>
                    <CategoryList>
                        <ListWrapper>
                            <CategoryItems />
                            <span>DRY</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems />
                            <span>FRUIT</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems />
                            <span>SWEET</span>
                        </ListWrapper>
                        <ListWrapper>
                            <CategoryItems />
                            <span>HOT</span>
                        </ListWrapper>
                    </CategoryList>
                </CategoryWrapper>
                <ItemWrapper>
                        <InfiniteScroll
                            pageStart={0}
                            hasMore={true}
                            loader={<div className="loader" key={0}>Loading...</div>}
                        >
                            {/* {cocktail.map(cocktail => (
                                <h2>{cocktail.name}</h2>
                            ))} */}
                            <ItemList>
                            <ItemBox/><ItemBox/><ItemBox/><ItemBox/><ItemBox/><ItemBox/><ItemBox/>
                            </ItemList>
                        </InfiniteScroll>
                </ItemWrapper>
            </Container>
        </MainPage>
    </>)
}

const ItemList =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(282px,1fr));
    gap: 24px;
    justify-items: center;
`;

const MainPage = styled.div`
    padding-top: 100px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: #EDEAE3;
`;

const Container = styled.div`
    position: relative;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 20% 0 20%; 
    display: grid;
    justify-items: center;
`;

const CategoryWrapper = styled.div`
    margin-top: 50px;
    width: 970px;
    height: 90px;
    display: grid;
    place-content: center;
    background: #FFFFFF;
    border: none;
    border-radius: 70px 70px;
`;

const CategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 46px;
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

const ItemWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
`;

const ItemBox = styled.div`
    width: 282px;
    height: 282px;
    background: #FFFFFF;
    border: none;
`;