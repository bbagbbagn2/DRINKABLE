import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "../../styles/CampaignCard.css";

interface TeaserProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  src: string;
}

export default function CampaingnCard({
  title,
  description,
  className,
  src,
  children,
}: TeaserProps) {
  const [targetRef, isVisibleRef] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div className={`teaser campaign-card content-on-bottom ${className}`}>
      <div className="cmp-teaser">
        <div className="cmp-teaser__content">
          <h3 className="cmp-teaser__title">{title}</h3>
          <div className="cmp-teaser__description">
            <p>{description}</p>
          </div>
          <div className="cmp-teaser__action-container">{children}</div>
        </div>
        <div className="cmp-teaser__image">
          <div className="cmp-adaptive-image cmp-image">
            <picture
              ref={targetRef}
              className={`loaded ${isVisibleRef && "visible"}`}
            >
              <source
                srcSet={src}
                media="(min-width: 1200px)"
                width="1280"
                height="1024"
              />
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
