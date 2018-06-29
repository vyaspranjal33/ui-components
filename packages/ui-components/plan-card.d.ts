/// <reference types="react" />
import React from 'react';
export interface PlanCardProps {
    planTitle?: string;
    recommended?: boolean;
    selectedPackage?: string;
    packageDetails?: Array<object>;
    planDetails?: Array<object>;
}
export declare const PlanCard: React.SFC<PlanCardProps>;
export default PlanCard;
