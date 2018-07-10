import React, { CSSProperties } from 'react';
import { ToggleAnythingProps } from './toggle-anything';
export interface ToggleButtonsProps {
    className?: string;
    style?: CSSProperties;
}
export declare const ToggleButtons: React.SFC<ToggleAnythingProps & ToggleButtonsProps>;
export default ToggleButtons;
