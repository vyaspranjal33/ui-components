/// <reference types="react" />
import React from 'react';
export interface FeatureListProps {
    className?: string;
    planDetails?: {
        available?: boolean;
        title?: string;
        tooltipContent?: string;
    }[];
    children?: React.ReactNode;
}
export declare const FeatureList: React.SFC<FeatureListProps>;
export default FeatureList;
