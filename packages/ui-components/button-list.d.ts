import React, { HTMLAttributes } from 'react';
import { ButtonProps } from './button';
export interface ButtonListProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactElement<ButtonProps> | Array<React.ReactElement<ButtonProps>>;
    onDark?: boolean;
    className?: string;
}
export declare const ButtonList: React.SFC<ButtonListProps>;
export default ButtonList;
