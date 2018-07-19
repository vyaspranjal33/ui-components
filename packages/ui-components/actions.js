var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
import cn from './utilities/classnames';
import DropdownButton from './dropdown-button';
import Icon from './icon';
import EmailCardStyles from './styles/email-card.module.scss';
export const Actions = (_a) => {
    var { children, className, inEmailCard, vertical } = _a, attributes = __rest(_a, ["children", "className", "inEmailCard", "vertical"]);
    const actions = React.Children.map(children, (action) => {
        return React.cloneElement(action, {
            showTitle: vertical,
        });
    });
    return (React.createElement("div", Object.assign({ className: cn({
            actions: !inEmailCard,
            [EmailCardStyles['email-row-actions']]: inEmailCard,
        }, className) }, attributes), vertical ? (React.createElement(DropdownButton, { gear: true, icon: "ellipsis-vertical" }, actions)) : (React.createElement(Fragment, null,
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)))));
};
export const ActionsCell = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement("td", Object.assign({ className: cn('actions', className) }, attributes),
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)));
};
export const Action = (_a) => {
    var { title, icon, onClick: handleClick, showTitle } = _a, attributes = __rest(_a, ["title", "icon", "onClick", "showTitle"]);
    const tooltipAttributes = showTitle
        ? {}
        : {
            'data-tooltip': title,
            'data-tooltip-pos': 'up',
        };
    return (React.createElement("span", Object.assign({}, tooltipAttributes, { onClick: handleClick }, attributes),
        React.createElement(Icon, { type: icon }),
        showTitle && title));
};
export default Actions;
//# sourceMappingURL=actions.js.map