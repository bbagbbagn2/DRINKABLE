import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import CategoryWrapper from './components/FlavorPage/CategoryWrapper';
import ItemWrapper from './components/FlavorPage/ItemWrapper';

export default function Flavor() {

    return (
        <>
            <Header />
            <CategoryWrapper />
            <ItemWrapper />
        </>
    );
}

