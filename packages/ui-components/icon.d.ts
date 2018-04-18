/// <reference types="react" />
import React from 'react';
import { IconType } from '../types/icons';
export interface IconProps {
    type: IconType;
    className?: string;
    onClick?: (event: any) => void;
    onDark?: boolean;
}
export declare const Icon: React.SFC<IconProps>;
export default Icon;
