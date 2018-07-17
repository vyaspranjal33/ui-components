/// <reference types="react" />
import React, { CSSProperties } from 'react';
import { InputType } from './types/inputs';
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
    onBlur?: (event: any, value: string | number) => void;
    style?: CSSProperties;
}
export declare class TextInput extends React.Component<TextInputProps, {
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
    constructor(props: TextInputProps);
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
