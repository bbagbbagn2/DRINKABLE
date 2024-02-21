import React, { useState, useEffect } from 'react';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BrandSection from './component/BrandSection';
import BannerSection from './BannerSection/BannerSection';
import CampaingnSection from './component/CampaignSection';
import FlavorSection from './FlavorSection/FlavorSection';
import BlueSection from './BlueSection/BlueSection';
import ExploreSection from './ExploreSection/ExploreSection';

export default function Main() {
    return (
        <div id="container">
            <Header />
            <BannerSection />
            <CampaingnSection />
            <FlavorSection />
            <BlueSection />
            <BrandSection />
            <Footer />
        </div>
    );
};