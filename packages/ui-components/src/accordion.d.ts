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
    className?: string;
    contentRender?: () => any;
    icon?: IconType;
    isOpen?: boolean;
    noPadding?: boolean;
    onClick?: (e: any) => void;
    title?: string;
    titleDescription?: string;
    titleRender?: (title?: string) => any;
}
export declare const AccordionPanel: React.SFC<AccordionPanelProps>;
export declare const Accordion: React.SFC<AccordionProps>;
export default Accordion;
