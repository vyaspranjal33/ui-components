import React from 'react';
import cn from '../utilities/classnames';
import { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelSFC, AccordionPanelTitle, } from './accordion-panel';
export var Accordion = function (_a) {
    var caretLeft = _a.caretLeft, children = _a.children, className = _a.className, editor = _a.editor, large = _a.large, list = _a.list;
    return (React.createElement("div", { className: cn('accordion-wrapper', className, {
            'accordion-caret-left': caretLeft,
            'accordion-large': large,
            'accordion-list': list,
            'is-editor': editor,
        }) }, children));
};
export default Accordion;
export { AccordionPanel, AccordionPanelSFC, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, };
//# sourceMappingURL=index.js.map