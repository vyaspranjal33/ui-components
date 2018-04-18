/// <reference types="react" />
import React from 'react';
export declare type TooltipDirection = 'up' | 'down' | 'left' | 'right';
export interface TooltipProps {
    content?: string;
    direction?: TooltipDirection;
    className?: string;
    children?: React.ReactElement<any>;
}
export declare const Tooltip: React.SFC<TooltipProps>;
export declare type HtmlTooltipDirection = 'left' | 'right';
export interface HTMLTooltipProps {
    direction?: TooltipDirection;
    className?: string;
    children?: React.ReactElement<any>;
    hoverTarget?: React.ReactElement<any>;
    debounce?: number;
}
export interface HTMLTooltipState {
    hovered: boolean;
    tooltipHeight: number;
    opened: boolean;
}
export declare class HTMLTooltip extends React.Component<HTMLTooltipProps, HTMLTooltipState> {
    static defaultProps: {
        className: string;
        debounce: number;
        direction: string;
    };
    state: {
        hovered: boolean;
        opened: boolean;
        tooltipHeight: number;
    };
    private tooltipRef;
    constructor(props: HTMLTooltipProps);
    shouldComponentUpdate(nextProps?: any, nextState?: any): boolean;
    handleHoverIn: () => void;
    handleHoverOut: () => void;
    render(): JSX.Element;
}
export default Tooltip;
