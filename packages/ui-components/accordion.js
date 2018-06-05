import React, { Fragment } from 'react';
import AnimateHeight from 'react-animate-height';
import Icon from './icon';
import cn from './utilities/classnames';
export var AccordionPanelTitle = function (_a) {
    var text = _a.text;
    return typeof text === 'string' ? React.createElement("h2", null, text) : React.createElement(Fragment, null, text);
};
export var AccordionPanelDescription = function (_a) {
    var text = _a.text;
    return typeof text === 'string' ? React.createElement("p", null, text) : React.createElement(Fragment, null, text);
};
export var AccordionPanelIcon = function (_a) {
    var iconType = _a.iconType;
    return React.createElement(Icon, { className: "accordion-icon", type: iconType });
};
export var AccordionPanel = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, isOpen = _a.isOpen, noPadding = _a.noPadding, onClick = _a.onClick, title = _a.title;
    return (React.createElement("div", { className: cn('accordion-panel', className, {
            'has-child': noPadding,
            'is-visible': isOpen,
        }) },
        React.createElement("div", { className: "accordion-title", onClick: onClick }, title),
        React.createElement(AnimateHeight, { duration: 500, height: isOpen ? 'auto' : 0 },
            React.createElement("div", { className: "accordion-content", style: { display: 'block' } }, children))));
};
export var Accordion = function (_a) {
    var caretLeft = _a.caretLeft, children = _a.children, className = _a.className, isEditor = _a.isEditor, isLarge = _a.isLarge, isList = _a.isList;
    return (React.createElement("div", { className: cn('accordion-wrapper', className, {
            'accordion-caret-left': caretLeft,
            'accordion-large': isLarge,
            'accordion-list': isList,
            'is-editor': isEditor,
        }) }, children));
};
export default Accordion;
//# sourceMappingURL=accordion.js.map