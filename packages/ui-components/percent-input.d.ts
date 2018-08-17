/// <reference types="react" />
import React, { Component } from 'react';
export interface PercentInputProps {
    value?: number;
}
export declare class PercentInput extends Component<PercentInputProps & React.InputHTMLAttributes<HTMLInputElement>> {
    render(): JSX.Element;
}
export default PercentInput;
