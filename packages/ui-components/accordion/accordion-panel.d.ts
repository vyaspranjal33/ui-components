/// <reference types="react" />
import React from 'react';
import { IconType } from '../types/icons';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';
export interface AccordionPanelProps {
    children: React.ReactNode;
    className?: string;
    icon?: IconType;
    open?: boolean;
    noPadding?: boolean;
    onClick?: (e: any) => void;
    title?: React.ReactNode;
}
declare const AccordionPanelSFC: React.SFC<AccordionPanelProps>;
export interface AccordionState {
    open: any;
}
export declare class AccordionPanel extends React.Component<AccordionPanelProps, AccordionState> {
    state: AccordionState;
    constructor(props: any);
    render(): JSX.Element;
    private onAccordionPanelClick;
}
export default AccordionPanel;
export { AccordionPanelDescription, AccordionPanelTitle, AccordionPanelIcon, AccordionPanelSFC };
