import React from "react";
import '../../styles/DesktopBanner.css';

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Desktop from "../../assets/images/projects/home-images/icondb/desktopbanner.png";

export default function DesktopBanner() {
  const [targetRef, isVisibleRef] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  return (
    <div className="container responsivegrid">
      <div className="cmp-container">
        <div className="teaser hero hero--normal">
          <div className="cmp-teaser">
            <div className="cmp-teaser__content" />
            <div className="cmp-teaser__image">
              <div className="cmp-adaptive-image cmp-image">
                <a className="cmp-image__link" href="/projects/icondb">
                  <picture 
                  ref={targetRef}
                  className={`loaded ${isVisibleRef && "visible"}`}
                  >
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