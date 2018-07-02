/// <reference types="react" />
import React from 'react';
export interface UploadProgressProps {
    children: Array<React.ReactNode> | React.ReactNode;
    className?: string;
    percent: number;
}
export declare const UploadProgress: React.SFC<UploadProgressProps>;
export default UploadProgress;
