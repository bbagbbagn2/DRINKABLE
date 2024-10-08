import React from "react";
import '../../styles/SecondaryHeader.css';

interface SecondaryHeaderProps {
    src: string;
    alt: string;
}

export default function SecondaryHeader({ src, alt }: SecondaryHeaderProps) {
    return (
        <div className="container responsivegrid secondary-header-logo">
            <div className="cmp-container">
                <div className="adaptiveImage image no-renditions">
                    <div className="cmp-adaptive-image cmp-image">
                        <picture className="visible loaded">
                            <img
                                src={src}
                                alt={alt}
                                className="cmp-image__image"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
