var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
export var Actions = function (_a) {
    var children = _a.children, className = _a.className, vertical = _a.vertical, attributes = __rest(_a, ["children", "className", "vertical"]);
    var actions = React.Children.map(children, function (action) {
        return React.cloneElement(action, {
            showTitle: vertical,
        });
    });
    return (React.createElement("div", __assign({ className: cn('actions', className) }, attributes), vertical ?
        React.createElement(DropdownButton, { gear: true, icon: "ellipsis-vertical" }, actions)
        :
            React.createElement(Fragment, null,
                React.createElement(Icon, { type: "ellipsis" }),
                React.createElement("div", { className: "action-icons" }, children))));
};
export var ActionsCell = function (_a) {
    var children = _a.children, className = _a.className, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement("td", __assign({ className: cn('actions', className) }, attributes),
        React.createElement(Icon, { type: "ellipsis" }),
        React.createElement("div", { className: "action-icons" }, children)));
};
export var Action = function (_a) {
    var title = _a.title, icon = _a.icon, handleClick = _a.onClick, showTitle = _a.showTitle, attributes = __rest(_a, ["title", "icon", "onClick", "showTitle"]);
    var tooltipAttributes = showTitle ?
        {} : {
        'data-tooltip': title,
        'data-tooltip-pos': 'up',
    };
    return (React.createElement("span", __assign({}, tooltipAttributes, { onClick: handleClick }, attributes),
        React.createElement(Icon, { type: icon }),
        showTitle && title));
};
export default Actions;
//# sourceMappingURL=actions.js.map