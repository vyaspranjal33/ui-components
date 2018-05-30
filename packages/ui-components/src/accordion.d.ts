/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export interface AccordionProps {
    caretLeft?: boolean;
    className?: string;
    isEditor?: boolean;
    isLarge?: boolean;
    isList?: boolean;
    onClick: (e: any, index: number) => void;
    panels: AccordionPanel[];
}
export interface AccordionPanel {
    hasChildren?: boolean;
    icon?: IconType;
    isOpen?: boolean;
    contentRender?: () => any;
    title?: string;
    titleDescription?: string;
    titleRender?: (title?: string) => any;
}
export declare const Accordion: React.SFC<AccordionProps>;
export default Accordion;
