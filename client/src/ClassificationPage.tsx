import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ItemWrapper from './components/FlavorPage/ItemWrapper';
import { setScreenSize } from './utils';

export default function Classification() {
    useLayoutEffect(() => {
        setScreenSize();
    }, []);

    useEffect(() => {
        function handleResize() {
            setScreenSize();
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header />
            <ClassificationPageLayout>
                <ClassificationPageRow>
                    <ItemWrapper />
                </ClassificationPageRow>
            </ClassificationPageLayout>
        </>
    );
}
const ClassificationPageLayout = styled.div`
    padding-top: 65px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
`

const ClassificationPageRow = styled.div`
    padding: 0 6.5%;
`;

