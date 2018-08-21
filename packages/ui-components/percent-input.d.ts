/// <reference types="react" />
import React from 'react';
import { HTMLInputElementProps, TextInputProps } from './text-input';
import { Omit } from './types/utils';
export declare type OmittedProps = 'type' | 'units' | 'placeholder' | 'max';
export declare type PercentInputProps = Omit<TextInputProps & HTMLInputElementProps, OmittedProps>;
export declare class PercentInput extends React.Component<PercentInputProps> {
    onValueChange: (event: React.KeyboardEvent<HTMLInputElement>) => any;
    render(): JSX.Element;
}
export default PercentInput;
