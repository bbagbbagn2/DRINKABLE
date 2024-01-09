import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import BannerSection from './pages/Main/BannerSection/BannerSection';
import FlavorSection from './pages/Main/FlavorSection/FlavorSection';
import BlueSection from './pages/Main/BlueSection/BlueSection';
import ExploreSection from './pages/Main/ExploreSection/ExploreSection';

export default function Main() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="container">
            <Header />
            <BannerSection />
            <FlavorSection />
            <BlueSection />
            <ExploreSection />
            <Footer />
        </div>
    );
};