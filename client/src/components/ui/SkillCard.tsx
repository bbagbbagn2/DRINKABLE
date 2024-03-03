import React, { ReactNode } from "react";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface SkillCardProps {
  title: string;
  src: string;
  children: ReactNode;
}

export default function SkillCard({ title, src, children }: SkillCardProps) {
  const [targetRef, isVisibleRef] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div className="teaser content-card">
      <div className="cmp-teaser">
        <div className="cmp-teaser__content">
          <h3 className="cmp-teaser__title">{title}</h3>
          <div className="cmp-teaser__description">
            <p>
              <b>{children}</b>
            </p>
          </div>
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
    </div>
  );
}
