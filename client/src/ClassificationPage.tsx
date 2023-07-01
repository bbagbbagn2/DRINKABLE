import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ItemWrapper from './components/ClassificationPage/ItemWrapper';
import { setScreenSize } from './utils';

export default function Classification(): JSX.Element {
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
                <ClassificationPageBox>
                    <ItemWrapper />
                </ClassificationPageBox>
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

const ClassificationPageBox = styled.div`
    padding: 0 6.5%;
`;

