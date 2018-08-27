/// <reference types="react" />
import React from 'react';
import { ExportedColorProps } from 'react-color/lib/components/common/ColorWrap';
export interface ColorPaletteProps {
    onMount: (rectangle: any) => void;
    toggleColorPalette: (rectangle: any) => void;
    top?: number;
    left?: number;
}
declare const _default: React.ComponentClass<ColorPaletteProps & ExportedColorProps>;
export default _default;
