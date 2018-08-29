/// <reference types="react" />
import React from 'react';
import { ColorResult } from 'react-color';
import { HTMLInputElementProps } from './text-input';
export declare function getPalettePosition(clientHeight: number, paletteTriggerRect: ClientRect, initialPaletteRect: ClientRect): {
    top: number;
    left: number;
};
export interface ColorPickerPropsTypes {
    labelText?: string;
    name: string;
    id: string;
    resetValue?: string;
    value: string;
    onChange: (event: React.SyntheticEvent<any>, value: string) => void;
}
export declare class ColorPicker extends React.Component<ColorPickerPropsTypes & HTMLInputElementProps, {
    displayColorPalette: boolean;
    top: number;
    left: number;
}> {
    state: {
        displayColorPalette: boolean;
        left: number;
        top: number;
    };
    paletteTriggerRect: ClientRect;
    colorPaletteButton: Element;
    onReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleChangeFromTextInput: (e: React.MouseEvent<HTMLButtonElement>, color: string) => void;
    handleChangeFromColorPalette: (color: ColorResult) => void;
    toggleColorPalette: () => void;
    handleColorPaletteMount: (paletteRect: ClientRect) => void;
    render(): JSX.Element;
}
export default ColorPicker;
