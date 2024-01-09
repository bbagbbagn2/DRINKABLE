import React, { useState, useEffect } from 'react';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BannerSection from './BannerSection/BannerSection';
import FlavorSection from './FlavorSection/FlavorSection';
import BlueSection from './BlueSection/BlueSection';
import ExploreSection from './ExploreSection/ExploreSection';

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