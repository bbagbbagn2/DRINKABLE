import React from 'react';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ProjectsSection from './component/ProjectsSection';
import BannerSection from './component/BannerSection';
import CampaingnSection from './component/CampaignSection';

export default function Main() {
    return (
        <div className='cmp-container'>
            <Header />
            <BannerSection />
            <CampaingnSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
};