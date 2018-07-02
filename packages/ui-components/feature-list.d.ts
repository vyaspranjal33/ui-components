/// <reference types="react" />
import React from 'react';
export interface FeatureListProps {
    className?: string;
    planDetails: Array<{
        available?: boolean;
        title?: string;
        toolTip?: string;
    }>;
    children?: any;
}
export declare const FeatureList: React.SFC<FeatureListProps>;
export default FeatureList;
