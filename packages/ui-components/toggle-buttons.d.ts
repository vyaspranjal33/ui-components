/// <reference types="react" />
import React from 'react';
export interface ToggleButtonsProps {
    children?: any[];
    className?: string;
    onChange?: (children: React.ReactNode, label?: string, index?: number) => any;
}
export interface ToggleButtonsState {
    activeIndex: number;
}
export declare const ToggleButtons: React.SFC<ToggleButtonsProps>;
export declare class StatefulToggleButtons extends React.Component<ToggleButtonsProps, ToggleButtonsState> {
    state: {
        activeIndex: number;
    };
    render(): JSX.Element;
    private handleChange(event, label, index);
}
export default ToggleButtons;
