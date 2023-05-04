import React, { useState, useEffect } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () =>{
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = screenWidth <= 768;

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}