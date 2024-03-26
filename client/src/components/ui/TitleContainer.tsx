import React from "react";

type TitleContainerProps = {
  children?: React.ReactNode;
};

export default function Title({ children }: TitleContainerProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
