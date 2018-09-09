/// <reference types="react" />
import React from 'react';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';
export interface IconProps {
    type: IconType;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onDark?: boolean;
    size?: IconSizeType;
}
export declare const Icon: React.SFC<IconProps & React.InputHTMLAttributes<any>>;
export default Icon;
