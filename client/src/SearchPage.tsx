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
                            <SearchBarBox>
                                <SearchBarHeading>검색</SearchBarHeading>
                                <SearchForm>
                                    <SearchDescriptedByParagraph>제안 링크는 입력한 내용을 기반으로 표시됩니다.</SearchDescriptedByParagraph>
                                    <SearchLabelInputBox>
                                        <SearchInputLabel>
                                            <SearchInputSpan>검색</SearchInputSpan>
                                        </SearchInputLabel>
                                        <SearchInput />
                                    </SearchLabelInputBox>
                                </SearchForm>
                            </SearchBarBox>
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
    animation: fadeIn .5s;
    background-color: #FFF;
    overflow-x: hidden;
    overflow-y: scroll;
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
    padding: 0 5.3333%;
    max-width: 83.875rem;
    min-height: 100vh;
    overflow: hidden;
`;
const SearchContentContainer = styled.div`
    position: relative;
    margin-left: 0;
    margin-right: -2.5333vw;
    padding: 1.375rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
`;

const SearchBarBox = styled.div`
    margin: 0 auto;
    padding: 0 0.9722vw;
    position: relative;
    width: 66.6667%;
    display: flex;
    flex-basis: auto;
`;

const SearchBarHeading = styled.div`
    padding: 0!important;
    position: absolute!important;
    width: 1px!important;
    height: 1px!important;
    border: 0!important;
    clip: rect(1px,1px,1px,1px)!important;
    clip-path: inset(50%)!important;
    overflow: hidden!important;
    white-space: nowrap!important;
    outline: none;
`;

const SearchForm = styled.div`
    position: relative;
    padding-bottom: 0.25rem;
    padding-left: 5.5rem;
    width: 100%;
    max-width: calc(100% - 28px);
    display: flex;
    flex-grow: 1;
    align-items: center;
    background-color: initaial;

    &::before {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        height: 0.25rem;
        content: "";
        background-color: CURRENTCOLOR;
        opacity: 0;
        transition: all .6s ease-out 0s;
    }

    &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        content: "";
        background-color: CURRENTCOLOR;
    }
`;

const SearchDescriptedByParagraph = styled.p`
    margin: 0;
    padding: 0;
    display: none!important;
`;

const SearchLabelInputBox =styled.div`
    padding-top: 0;
    position: relative;
    min-height: 0;
    flex-grow: 1;
    align-items: center;
    backface-visibility: hidden;
`;
const SearchInputLabel = styled.label`
    position: absolute;
    left: 0;
    padding: 0 0 0 0.3125rem;
    width: 100%;
    max-width: 100%;
    height: 3.3125rem;
    font-size: 2.25rem;
    font-weight: 600;
    line-height; 3.3125rem;
    cursor: text;
    text-align: center;
    text-overflow: ellipsis;
    transform: none;
    transform-origin: left;
    transition: opacity .3s; 
    white-space: nowrap;
    z-index: 0;

    span::after {
        position: absolute;
        top: 2px;
        left: 0;
        content: "";
        border-left: 1px solid #1D1D1D;
        animation: blink-caret 1s step-end infinite;
        opacity: 0;
    }

    &:hover span::after {
        opacty: 1;
    }
`;
const SearchInputSpan = styled.span`
    position: relative;
    color: #1D1D1D80;
`;

const SearchInput = styled.input`
    background: none;
    border: none;
    box-shadow: none;
`;