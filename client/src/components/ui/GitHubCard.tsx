import React from "react";
import "../../styles/GitHubCard.css";

import { IoLogoGithub } from "react-icons/io";

export default function GitHubCard() {
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
                      <h2>GitHub에서 ICONDB를 확인하세요</h2>
                    </div>
                  </div>
                  <div className="container responsivegrid">
                    <div className="cmp-container">
                      <div className="button button--secondary button--white button--icon">
                        <a
                          className="cmp-button"
                          aria-label="GitHub"
                          target="_blank"
                          href="https://github.com/stack0801/Icon_DB"
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
