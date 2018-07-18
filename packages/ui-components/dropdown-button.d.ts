/// <reference types="react" />
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
    menuOffset: number;
}
export declare class DropdownButton extends React.Component<DropdownButtonProps & ButtonProps, DropdownButtonState> {
    static defaultProps: Partial<ButtonProps & React.HTMLAttributes<HTMLButtonElement> & React.InputHTMLAttributes<HTMLButtonElement>>;
    dropdownElement: HTMLDivElement;
    state: {
        active: boolean;
        menuOffset: number;
    };
    componentWillUnmount(): void;
    render(): JSX.Element;
    private toggleDropdown;
    private dismissDropdown;
}
export default DropdownButton;
