import React, { ReactNode } from "react";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { BsArrowRight } from "react-icons/bs";

interface SkillCardProps {
  title: string;
  src: string;
  children: ReactNode;
  showActionLink?: boolean;
  href?: string;
}

export default function SkillCard({
  title,
  src,
  children,
  showActionLink = false,
  href
}: SkillCardProps) {
  const [targetRef, isVisibleRef] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const teaserContent = (
    <div className="cmp-teaser">
      <div className="cmp-teaser__content">
        <h3 className="cmp-teaser__title">{title}</h3>
        <div className="cmp-teaser__description">
          <p>
            <b>{children}</b>
          </p>
        </div>
        {showActionLink && (
          <div className="cmp-teaser__action-container">
            <p className="cmp-teaser__action-link">
              자세히 보기{" "}
              <BsArrowRight size="20" style={{ marginLeft: "10px" }} />
            </p>
          </div>
        )}
      </div>
      <div className="cmp-teaser__image">
        <div className="cmp-adaptive-image cmp-image">
          <picture
            ref={targetRef}
            className={`loaded ${isVisibleRef && "visible"}`}
          >
            <img src={src} loading="lazy" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );

  return showActionLink ? (
      <div className="teaser content-card">
        
    <a href={href} target="_blank" rel="noreferrer">
    {teaserContent}
      </a></div>
  ) : (
    <div className="teaser content-card">{teaserContent}</div>
  );
}
