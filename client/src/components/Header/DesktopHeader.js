import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";

export default function Desktop(){
    return(
        <DesktopHeader>
            <LogoWrapper><Logo/></LogoWrapper>
            <MenuList>
                <ListItems to="/flavor">FLAVOR</ListItems>
                <ListItems>AMOUNT</ListItems>
                <ListItems>0%</ListItems>
            </MenuList>
        </DesktopHeader>
    );
}

const DesktopHeader = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;

    display: grid;
    grid-template-columns: 19% 62% 19%;
    place-items: center;
    background: #EDEAE3;

    z-index: 999;
`;

const LogoWrapper = styled.div`
    margin: 33.3px 55px;
`;

const MenuList = styled.div`
    margin: 0 306px;
    height: 100%;    

    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
`;

const ListItems = styled(Link)`
    width: 190px;

    display: grid;
    place-items: center;

    color: black;
    font-size: 25px;
    text-decoration: none;
    transition: 0.3s;
    &:hover{
        color: #8E6C62;
    }
    
`;
//맛(술, 리프레싱, 프루트, 스위트, 스무디, 핫), 용량(많은, 작은), 무알콜