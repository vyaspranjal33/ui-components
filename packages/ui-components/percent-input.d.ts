/// <reference types="react" />
import React from 'react';
import { HTMLInputElementProps, StatefulTextInput, TextInputProps } from './text-input';
export declare type OmittedProps = 'type' | 'units' | 'placeholder' | 'max';
export declare class PercentInput extends StatefulTextInput<OmittedProps> {
    static defaultProps: Partial<TextInputProps & HTMLInputElementProps>;
    onValueChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default PercentInput;
