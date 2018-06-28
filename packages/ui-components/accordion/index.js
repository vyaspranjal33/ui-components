import React from 'react';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';
import { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelSFC, AccordionPanelTitle, } from './accordion-panel';
export const Accordion = ({ caretLeft, children, className, editor, large, list, }) => {
    return (React.createElement("div", { className: cn(Styles['accordion-wrapper'], className, {
            [Styles['accordion-caret-left']]: caretLeft,
            [Styles['accordion-large']]: large,
            [Styles['accordion-list']]: list,
            [Styles['is-editor']]: editor,
        }) }, children));
};
export default Accordion;
export { AccordionPanel, AccordionPanelSFC, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, };
//# sourceMappingURL=index.js.map