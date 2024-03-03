import React from "react";

type TitleProps = {
  children?: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <div className="title">
      <div className="cmp-title">
        {children}
      </div>
    </div>
  );
}