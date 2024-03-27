import React from "react";
import { GridThreeContainer } from "../../../components/ui/GridContainer";
import ContentCard from "../../../components/ui/ContentCard";
import Title from "../../../components/ui/TitleContainer";
import { AboutmeLinksData } from "../../../data/data";

export default function LinksWrapper() {
  return (
    <div>
      <Title>
        <h1>Links</h1>
      </Title>
      <GridThreeContainer>
        {AboutmeLinksData.map((link, index) => (
          <ContentCard
            key={index}
            title={link.title}
            src={link.src}
            showActionLink={link.showActionLink}
            href={link.href}
          >
            {link.description}
          </ContentCard>
        ))}
      </GridThreeContainer>
    </div>
  );
}
