import React from "react";
import styled from "styled-components";

export default function Category() {
    return (
        <Page>
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
            </Page>
            );
};

const Page = styled.div`
    padding-top: 100px;
    display: grid;
    place-items: center;
    place-content: center;
    height: 30vh;
    background: #EDEAE3;

`;
const CategoryWrapper = styled.div`
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