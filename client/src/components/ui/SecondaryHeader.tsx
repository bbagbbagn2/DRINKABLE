import React from "react";
import '../../styles/SecondaryHeader.css';

import icondb from "../../assets/images/projects/icondb logo.png";

export default function SecondaryHeader() {
    return (
        <div className="container responsivegrid secondary-header-logo">
            <div className="cmp-container">
                <div className="adaptiveImage image no-renditions">
                    <div className="cmp-adaptive-image cmp-image">
                        <picture className="visible loaded">
                            <img
                                src={icondb}
                                alt="icondb 로고"
                                className="cmp-image__image"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
