import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function MainConatiner({ children }: MainProps) {
  return (
    <main className="container responsivegrid">
      <div className="cmp-container">{children}</div>
    </main>
  );
}
