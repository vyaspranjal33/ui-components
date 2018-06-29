/// <reference types="react" />
import React from 'react';
export interface RadioGroupProps {
    children: Array<React.ReactElement<RadioProps>>;
    name: string;
    onChange: (event: any) => void;
}
export declare const RadioGroup: React.SFC<RadioGroupProps>;
export interface RadioProps {
    checked: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label: string;
    name?: string;
    onChange?: (event: any) => void;
    value: string;
}
export declare const Radio: React.SFC<RadioProps>;
export interface RadioState {
    checked: boolean;
}
export declare class StatefulRadio extends React.Component<RadioProps, RadioState> {
    state: RadioState;
    constructor(props: RadioProps);
    handleChange(event: any): void;
    render(): JSX.Element;
}
export default Radio;
