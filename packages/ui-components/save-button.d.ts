/// <reference types="react" />
import React from 'react';
import { ButtonProps } from './button';
export interface SaveButtonProps {
    hasIcon: boolean;
    saving: boolean;
    saved: boolean;
}
export declare class SaveButton extends React.Component<SaveButtonProps & ButtonProps & React.InputHTMLAttributes<HTMLButtonElement>> {
    render(): JSX.Element;
}
export default SaveButton;
