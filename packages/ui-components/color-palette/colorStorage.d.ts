/// <reference types="react" />
import React, { Component } from 'react';
export interface ColorType {
    color: string;
    key: string;
}
export interface ColorStorageProps {
    color: string;
    onChange: (color: string, event: React.ChangeEvent<any>) => void;
}
export interface ColorStore {
    [key: string]: string;
}
declare class ColorStorage extends Component<ColorStorageProps, {
    colors: ColorStore;
}> {
    constructor(props: ColorStorageProps);
    addColor(event: React.MouseEvent<HTMLElement>): void;
    removeColor(event: React.MouseEvent<HTMLElement>, id: string): void;
    saveState(): void;
    render(): JSX.Element;
}
export default ColorStorage;
