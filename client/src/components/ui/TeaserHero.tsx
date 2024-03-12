import React, { ReactNode } from "react";
import "../../styles/TeaserHero.css";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface TeaserHeroProps {
  src?: string;
  children?: ReactNode;
  className?: string;
}

export default function TeaserHero({ src, children, className = "" }: TeaserHeroProps) {
  const [targetRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div className={`teaser hero ${className}`}>
      <div className="cmp-teaser">
        <div className="cmp-teaser__content">
          <h1 className="cmp-teaser__title">{children}</h1>
        </div>
        <div className="cmp-teaser__image">
          <div className="cmp-adaptive-image cmp-image">
            <picture
              ref={targetRef}
              className={`${isVisible && "loaded visible"}`}
            >
              <img
                src={src}
                loading="lazy"
                className="cmp-image__image"
                itemProp="contentUrl"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
