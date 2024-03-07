import React from "react";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import TeaserHero from "../../components/ui/TeaserHero";

import main1 from "../../assets/images/main.png";

export default function BannerSection() {

  return (
    <div className="cmp-container">
      <Header />
      <main className="container responsivegrid">
        <div className="cmp-container">
          <TeaserHero src={main1}>
            ABOUT ME
          </TeaserHero>
          <div className="text">
            <div className="cmp-text" style={{textAlign: 'center'}}>
                <h1>결과와 과정을 통해 배우다.</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
