import React from 'react';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Container from '../../components/ui/Container';
import AllergySection from './component/AllergySection';
import BannerSection from './component/BannerSection';
import CampaingnSection from './component/CampaignSection';

export default function Main() {
    return (
        <Container>
            <Header />
            <BannerSection />
            <CampaingnSection />
            <AllergySection />
            <Footer />
        </Container>
    );
};