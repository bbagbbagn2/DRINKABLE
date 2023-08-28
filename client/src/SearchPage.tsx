import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Search(): JSX.Element {
    return (
        <NewSeachPageOverlay>
            <SeachOverlay>
                <SearchBox>
                    <SearchCloseBox>
                        <SearchCloseButton>
                            <SearchCloseSpan>
                                닫기
                            </SearchCloseSpan>
                        </SearchCloseButton>
                    </SearchCloseBox>
                    <SearchContainer>
                        <SearchContentContainer>
                        <SearchInput 
                        id="standard"
                        label="검색" />
                            <div>

                            </div>
                            <div>

                            </div>
                        </SearchContentContainer>
                    </SearchContainer>
                </SearchBox>
            </SeachOverlay>
        </NewSeachPageOverlay>
    );
}

const NewSeachPageOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #FFF;
    animation: fadeIn .5s;
    z-index: 85;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const SeachOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    animation: fadeIn .5s;
    z-index: 85;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const SearchBox = styled.div`
    position: relative;
    overflow-y: auto;
`

const SearchCloseBox = styled.div`
    position: absolute;
    top: 1.43rem;
    right: 5.3%;
    z-index: 1;

    @media screen and (min-width: 37.563rem) {
        position: absolute;
        display: block;
        top: 1.4rem;
        right: 1.9rem;
        z-index: 1;
    }
`;
const SearchCloseButton = styled.button`
    position: relative;
    padding: 0 0 1rem;
    height: auto;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    vertical-align: middle;
    border-width: 0;
    border-radius: 0;
    background: initial;
    font-size: .875rem;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5;
    text-transform: none;

    @media screen and (min-width: 37.563rem) {
        color: #000;
        cursor: pointer;
        height: auto;
        padding: 0;
    }

    @media screen and (min-width: 60.06rem) {
        cursor: pointer;
    }
`;
const SearchCloseSpan = styled.span`
    padding: 0!important;
    text-transform: capitalize;

    @media screen and (min-width: 37.563rem) {
        position: static!important;
        width: auto!important;
        height: auto!important;
        overflow: hidden!important;
        clip: auto!important;
        clip-path: none!important;
        border: none!important;
        color: #000;
    }

    @media screen and (min-width: 60.06rem) {
        cursor: pointer;
    }
`;

const SearchContainer = styled.div`
    margin: 0 auto;
    paddinf: 0 5.33%;
    max-width: 83.875rem;
    min-height: 100vh;
    overflow: hidden;
`;
const SearchContentContainer = styled.div`
    position: relative;
    margin-left: 0;
    margin-right: -2.53vw;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    @media screen and (min-width: 37.563rem) {
        padding: 1.375rem 0;  
    }
`;
const SearchInput = styled(TextField)`
    width: 80%;
    height: 100px;
    background: #FFF;
    color: #707070;

    & label.Mui-focused {
        color: #333;
    }
        
    & .MuiInput-underline:after {
        border: 2px solid #000;
    }

    & .MuiInputBase-root {
        color: #000;
        font-size: 2.6rem;
        
    }
    & .MuiOutlinedInput-root {
        
        & fieldset {
            border-color: #000; 
        }

        &:hover fieldset {
            border-color: #000;
        }
    
        &.Mui-focused fieldset {
        }
    }
`;