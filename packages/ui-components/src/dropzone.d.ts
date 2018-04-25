/// <reference types="react" />
import React from 'react';
import { AlertProps } from './alert';
export interface DropzoneProps {
    active?: boolean;
    hovered?: boolean;
    large?: boolean;
    children?: React.ReactElement<AlertProps>;
}
export declare const Dropzone: React.SFC<DropzoneProps>;
export default Dropzone;
