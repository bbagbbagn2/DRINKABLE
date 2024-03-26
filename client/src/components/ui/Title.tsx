import React from "react";

type TitleProps = {
  children?: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
