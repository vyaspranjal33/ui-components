import React from 'react';
import { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelSFC, AccordionPanelTitle } from './accordion-panel';
export interface AccordionProps {
    caretLeft?: boolean;
    className?: string;
    editor?: boolean;
    large?: boolean;
    list?: boolean;
}
export declare const Accordion: React.SFC<AccordionProps>;
export default Accordion;
export { AccordionPanel, AccordionPanelSFC, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, };
