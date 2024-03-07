import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export default function Text({ children }: Props) {
  return (
    <div className="text">
      <div className="cmp-text">
        {children}
      </div>
    </div>
  );
}
