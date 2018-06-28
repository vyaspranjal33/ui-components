import React from 'react';
import { ButtonProps } from './button';
export interface DropdownButtonProps {
    children?: any;
    label?: string;
    gear?: boolean;
    className?: string;
}
export interface DropdownButtonState {
    active: boolean;
}
export declare class DropdownButton extends React.Component<DropdownButtonProps & ButtonProps, DropdownButtonState> {
    static defaultProps: Partial<ButtonProps>;
    state: {
        active: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export default DropdownButton;
