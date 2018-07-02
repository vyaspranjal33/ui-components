/// <reference types="react" />
import React from 'react';
export interface PlanCardProps {
    planTitle?: string;
    recommended?: boolean;
    selectedPackage?: string;
    packageDetails?: Array<object>;
    planDetails: Array<{
        available?: boolean;
        title?: string;
        toolTip?: string;
    }>;
}
export declare const PlanCard: React.SFC<PlanCardProps>;
export default PlanCard;
