import React, { ReactNode } from "react";
import styled from "styled-components";

type GridContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: GridContainerProps) {
  return <GridContainer>{children}</GridContainer>;
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }

  & > * {
    flex: 0 0 100%;
    min-width: 100%;
    padding-inline: 8px;

    @media only screen and (min-width: 1200px) {
      padding-inline: 16px;
    }
  }
`;
const GridTwoContainer = styled(GridContainer)`
  & > * {
    @media only screen and (min-width: 1200px) {
      flex: 0 0 50%;
      min-width: 50%;
      padding-inline: 16px;
    }
  }
`;
const GridThreeContainer = styled(GridContainer)`
  & > * {
    @media only screen and (min-width: 1200px) {
      flex: 0 0 33.3333333333%;
      min-width: 33.3333333333%;
      padding-inline: 16px;
    }
  }
`;

export { GridTwoContainer, GridThreeContainer };
