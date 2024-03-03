import React from "react";

interface ProjectsListProps {
  href: string;
  alt: string;
  src: string;
}

export default function ProjectsListItem({ alt, src, href }: ProjectsListProps) {
  return (
    <div className="adaptiveImage image">
      <div className="cmp-adaptive-image cmp-image">
        <a href={href} className="cmp-image__link">
          <picture>
            <img
              loading="lazy"
              className="cmp-image__image"
              itemProp="contentUrl"
              alt={alt}
              src={src}
            />
          </picture>
        </a>
      </div>
    </div>
  );
}