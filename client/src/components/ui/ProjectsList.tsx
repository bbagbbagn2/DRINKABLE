import React, { ReactNode } from "react";
import '../../styles/ProjectsList.css';

interface ProjectsListProps {
    children: ReactNode;
}

export default function ProjectsList({ children }: ProjectsListProps) {
  return (
    <div className="container responsivegrid projects-list">
      <div className="cmp-container">
        {children}
      </div>
    </div>
  );
}
