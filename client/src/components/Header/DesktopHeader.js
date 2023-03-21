import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

export default function Desktop(){
    return(
        <DesktopHeader>
            <LogoWrapper><Logo/></LogoWrapper>
        </DesktopHeader>
    );
}

const DesktopHeader = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;

    display: grid;
    place-items: center;
    background: #EDEAE3;

    z-index: 999;
`;

const LogoWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin: 33.3px 55px;

`;
