import React from "react";

import TeaserHero from "../../../components/ui/TeaserHero";
import Main from "../../../components/ui/Main";
import main1 from "../../../assets/images/background.jpg";

export default function BannerSection() {
  return (
    <Main>
      <div className="cmp-container">
        <TeaserHero src={main1}>
          결과와 과정을 생각하는
          <br />
          박지훈입니다.
        </TeaserHero>
      </div>
    </Main>
  );
}
