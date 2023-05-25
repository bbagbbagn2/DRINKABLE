import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ItemWrapper from './components/FlavorPage/ItemWrapper';
import { setScreenSize } from './utils';

export default function Flavor() {
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
            <Page>
            <Container>
                <Wrapper>
                    <ItemWrapper />
                </Wrapper>
            </Container>
            </Page>
        </>
    );
}
const Page = styled.div`
    padding-top: 65px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    grid-template-columns: 1fr;
`

const Container = styled.div`
    display: grid;
`;

const Wrapper = styled.div`
    padding: 0 6%;
`;

