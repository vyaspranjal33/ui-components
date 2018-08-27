/// <reference types="react" />
import React from 'react';
export interface ColorSwatchProps {
    color: string;
    current?: boolean;
    onClick?: (color: string, e: React.MouseEvent<HTMLElement>) => void;
    removeColor?: (e: React.MouseEvent<HTMLElement>) => void;
    storageKey?: string;
}
declare const ColorSwatch: ({ color, current, onClick, removeColor, }: ColorSwatchProps) => JSX.Element;
export default ColorSwatch;
