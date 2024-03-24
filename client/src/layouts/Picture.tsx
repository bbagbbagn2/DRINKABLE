import React, { ReactNode } from "react";
import styled from "styled-components";

type PictureContainerProps = {
  children: ReactNode;
};

export default function PictureContainer({ children }: PictureContainerProps) {
  return <Picture>{children}</Picture>;
}

const Picture = styled.picture`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;
