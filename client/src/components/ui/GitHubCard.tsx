import React from "react";
import "../../styles/GitHubCard.css";

import { IoLogoGithub } from "react-icons/io";

interface GitHubCardProps {
  text: string;
  href: string;
}
export default function GitHubCard({ text, href }: GitHubCardProps) {
  return (
    <div className="container responsivegrid">
      <div className="cmp-container">
        <div className="experiencefragment">
          <div className="cmp-experiencefragment cmp-experiencefragment--social-share-black">
            <div className="cmp-container">
              <div className="container responsivegrid action-card black-bg">
                <div className="cmp-container">
                  <div className="text">
                    <div className="cmp-text">
                      <h2>GitHub에서 {text} 개발 정보를 확인하세요</h2>
                    </div>
                  </div>
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      <div className="button button--secondary button--white button--icon">
                        <a
                          className="cmp-button"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                          href={href}
                        >
                            <IoLogoGithub size="24" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
