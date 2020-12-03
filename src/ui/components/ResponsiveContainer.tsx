import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Desktop = (props:any) => {
    const isDesktop = useMediaQuery({minWidth:992});
    return isDesktop ? props.children : null;
}

export const Tablet = (props:any) => {
    const isTablet = useMediaQuery({ minWidth: 768,maxWidth:991 });
    return isTablet ? props.children : null;
}

export const Mobile = (props:any) => {
    const isMobile = useMediaQuery({ maxWidth:767 });
    return isMobile ? props.children : null;
}

export const Default = (props:any) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? props.children : null;
}