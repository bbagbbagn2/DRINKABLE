import React, { ReactNode } from "react";
import styled from "styled-components";

type IconWrapperProps = {
  children: ReactNode;
};

export default function IconWrapper({ children }: IconWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;