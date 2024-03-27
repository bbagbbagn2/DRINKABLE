import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import ProfileWrapper from "./components/ProfileWrapper";
import SkillsWrapper from "./components/SkillsWrapper";
import LinksWrapper from "./components/LinksWrapper";
import InnerContainer from "../../components/ui/InnerContainer";
import MainConatiner from "../../components/ui/Main";
import TeaserHero from "../../components/ui/TeaserHero";
import main1 from "../../assets/images/main.png";

export default function BannerSection() {
  return (
    <InnerContainer>
      <Header />
      <MainConatiner>
        <TeaserHero src={main1}>About Me</TeaserHero>
        <ProfileWrapper />
        <SkillsWrapper />
        <LinksWrapper />
      </MainConatiner>
      <Footer />
    </InnerContainer>
  );
}
