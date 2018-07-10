import React from 'react';
export interface NumberedStepProps {
    children: React.ReactElement<any> | Array<React.ReactElement<any>>;
    header: string;
}
export declare const NumberedStep: React.SFC<NumberedStepProps>;
export interface NumberedStepsProps {
    children: React.ReactElement<NumberedStepProps> | Array<React.ReactElement<NumberedStepProps>>;
    className?: string;
}
export declare const NumberedSteps: React.SFC<NumberedStepsProps>;
