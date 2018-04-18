/// <reference types="react" />
import React, { HTMLAttributes } from 'react';
import { ButtonProps } from './Button';
export interface ButtonListProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactElement<ButtonProps> | Array<React.ReactElement<ButtonProps>>;
    onDark?: boolean;
}
export declare const ButtonList: React.SFC<ButtonListProps>;
export default ButtonList;
