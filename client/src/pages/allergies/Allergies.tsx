import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../layouts/Header';
import ItemWrapper from '../../components/ClassificationPage/ItemWrapper';

export default function Classification() {
    return (
        <div className='cmp-container'>
            <Header />
            <main className='container responsivegrid'>
                <ClassificationPageBox>
                    <ItemWrapper />
                </ClassificationPageBox>
            </main>
        </div>
    );
}

const ClassificationPageBox = styled.div`
    padding: 0 6.5%;
`;

