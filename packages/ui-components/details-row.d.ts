/// <reference types="react" />
import React from 'react';
export interface DetailsRowProps {
    className?: string;
    title?: string;
    available?: boolean;
    tooltipContent?: string;
    children?: React.ReactNode;
}
export declare const DetailsRow: React.SFC<DetailsRowProps>;
export default DetailsRow;
