import React, { useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroller';
import Header from "./components/Header/Header";
import { setScreenSize } from './utils';

export default function Flavor() {
    useEffect(()=>{
        setScreenSize();
    }, []);

    return (
    <>
        <Header />
        <Container>
            <Wrapper>
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
                        hasMore={true || false}
                        useWindow={false}>
                        <Items />
                    </InfiniteScroll>
                </ItemWrapper>
            </Wrapper>
        </Container>
    </>
    );
}

const Container = styled.div`
    padding-top: 100px;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    place-items: center;
    background: #EDEAE3;
`;

const Wrapper = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 20% 0 20%; 
    display: grid;
    justify-items: center;
`;

const CategoryWrapper = styled.div`
    margin-top: 50px;
    width: 970px;
    height: 90px;
    display: grid;
    place-items: center;
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

const Items = styled.div`
    width: 282px;
    height: 354px;
    background: #FFFFFF;
    border: none;
`;