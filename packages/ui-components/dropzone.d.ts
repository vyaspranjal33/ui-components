import React from 'react';
import { AlertProps } from './alert';
export interface DropzoneProps {
    active?: boolean;
    alert?: React.ReactElement<AlertProps>;
    children?: string | React.ReactElement<any>;
    className?: string;
    hovered?: boolean;
    invalid?: boolean;
    large?: boolean;
    onDragEnd?: (event: any) => void;
    onDragLeave?: (event: any) => void;
    onDragOver?: (event: any) => void;
    onDrop?: (event: any) => void;
}
export declare const Dropzone: React.SFC<DropzoneProps>;
export default Dropzone;
