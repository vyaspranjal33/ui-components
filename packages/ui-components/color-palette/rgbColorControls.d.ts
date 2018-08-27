/// <reference types="react" />
import React, { Component } from 'react';
import { ColorChangeHandler, RGBColor } from 'react-color';
export interface RGBColorControlsProp {
    rgb: RGBColor;
    onChange: ColorChangeHandler;
}
declare class RGBColorControls extends Component<RGBColorControlsProp> {
    handleChange: (color: Partial<RGBColor>, event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default RGBColorControls;
