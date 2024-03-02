import React from "react";
import '../../styles/DesktopBanner.css';

import Desktop from "../../assets/images/projects/home-images/icondb/icondb desktopbanner.png";

export default function DesktopBanner() {
  return (
    <div className="container responsivegrid">
      <div className="cmp-container">
        <div className="teaser hero hero--normal">
          <div className="cmp-teaser">
            <div className="cmp-teaser__content" />
            <div className="cmp-teaser__image">
              <div className="cmp-adaptive-image cmp-image">
                <a className="cmp-image__link" href="/projects/icondb">
                  <picture className="visible loaded">
                    <img
                      src={Desktop}
                      className="cmp-image__image"
                      itemProp="contentUrl"
                      alt="ICONDB 배경화면"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}