import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ProjectsSection from "./component/ProjectsSection";
import BannerSection from "./component/BannerSection";
import CampaingnSection from "./component/CampaignSection";
import InnerContainer from "../../components/ui/InnerContainer";

export default function Main() {
  return (
    <InnerContainer>
      <Header />
      <BannerSection />
      <CampaingnSection />
      <ProjectsSection />
      <Footer />
    </InnerContainer>
  );
}
