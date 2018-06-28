/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export interface AccordionProps {
    caretLeft?: boolean;
    className?: string;
    isEditor?: boolean;
    isLarge?: boolean;
    isList?: boolean;
}
export interface AccordionPanelProps {
    children: any;
    className?: string;
    icon?: IconType;
    isOpen?: boolean;
    noPadding?: boolean;
    onClick?: (e: any) => void;
    title?: any;
}
export interface AccordionPanelTitleTextProps {
    text: string | JSX.Element;
}
export interface AccordionPanelIconProps {
    iconType: IconType;
}
export declare const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps>;
export declare const AccordionPanelDescription: React.SFC<AccordionPanelTitleTextProps>;
export declare const AccordionPanelIcon: React.SFC<AccordionPanelIconProps>;
export declare const AccordionPanel: React.SFC<AccordionPanelProps>;
export declare const Accordion: React.SFC<AccordionProps>;
export default Accordion;
