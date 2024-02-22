import React from 'react';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import AllergySection from './component/AllergySection';
import BannerSection from './BannerSection/BannerSection';
import CampaingnSection from './component/CampaignSection';

export default function Main() {
    return (
        <div className='cmp-container'>
            <Header />
            <BannerSection />
            <CampaingnSection />
            <AllergySection />
            <Footer />
        </div>
    );
};