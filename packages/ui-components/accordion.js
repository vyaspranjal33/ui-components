import React from 'react';
import AnimateHeight from 'react-animate-height';
import Icon from './icon';
import cn from './utilities/classnames';
export var Accordion = function (_a) {
    var caretLeft = _a.caretLeft, className = _a.className, isEditor = _a.isEditor, isLarge = _a.isLarge, isList = _a.isList, onClick = _a.onClick, panels = _a.panels;
    return (React.createElement("div", { className: cn('accordion-wrapper', className, {
            'accordion-caret-left': caretLeft,
            'accordion-large': isLarge,
            'accordion-list': isList,
            'is-editor': isEditor,
        }) }, panels.map(function (panel, index) {
        var hasChildren = panel.hasChildren, isOpen = panel.isOpen, icon = panel.icon, contentRender = panel.contentRender, title = panel.title, titleDescription = panel.titleDescription, titleRender = panel.titleRender;
        return (React.createElement("div", { key: index, className: cn('accordion-panel', className, {
                'has-child': hasChildren,
                'is-visible': isOpen,
            }) },
            React.createElement("div", { className: "accordion-title", onClick: function (e) { return onClick(e, index); } },
                isLarge && icon && React.createElement(Icon, { className: "accordion-icon", type: icon }),
                (titleRender && titleRender(title)) || (title && React.createElement("h2", null, title)),
                isLarge && titleDescription && React.createElement("p", null, titleDescription)),
            React.createElement(AnimateHeight, { duration: 500, height: isOpen ? 'auto' : 0 },
                React.createElement("div", { className: "accordion-content", style: { display: 'block' } }, contentRender()))));
    })));
};
export default Accordion;
//# sourceMappingURL=accordion.js.map