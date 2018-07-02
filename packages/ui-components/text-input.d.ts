/// <reference types="react" />
import React, { CSSProperties } from 'react';
import { InputType } from './types/inputs';
import { Omit } from './types/utils';
export interface TextInputProps {
    children?: React.ReactNode;
    type: InputType;
    id: string;
    onChange: (event: any, value: string | number) => void;
    value?: string | number;
    name?: string;
    fullWidth?: boolean;
    isValid?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isLarge?: boolean;
    isSearch?: boolean;
    label?: string;
    info?: string;
    onBlur?: (event: FocusEvent, value: string | number) => void;
    style?: CSSProperties;
}
/**
 * Inorder to allow for ...attributes we need to use
 * Partial<React.InputHTMLAttributes<HTMLInputElement>>
 * to add all of those possible types. However, this component is
 * redefining the function definition for onBlur, so we must omit the
 * original event hook from the possible props.
 */
export declare type HTMLInputElementProps = Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onBlur'>>;
export declare class TextInput extends React.Component<TextInputProps & HTMLInputElementProps, {
    isInputFocused: boolean;
}> {
    static defaultProps: {
        fullWidth: boolean;
        info: string;
        isDisabled: boolean;
        isLarge: boolean;
        isRequired: boolean;
        isSearch: boolean;
        isValid: boolean;
        label: string;
        style: React.CSSProperties;
        value: string;
    };
    onInputFocus: (event: any) => void;
    constructor(props: TextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>);
    readonly inputStyle: React.CSSProperties;
    onValueChange(event: any): void;
    onInputBlur(event: any): void;
    render(): JSX.Element;
}
export declare class StatefulTextInput extends React.Component<TextInputProps> {
    static defaultProps: Partial<TextInputProps>;
    constructor(props: TextInputProps);
    onValueChange(event: any): void;
    render(): JSX.Element;
}
