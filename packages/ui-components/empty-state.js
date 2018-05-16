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
import React from 'react';
import Icon from './icon';
import cn from './utilities/classnames';
var evaluateRenderProp = function (prop) {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React.createElement(Icon, { type: prop });
    }
};
export var EmptyState = function (_a) {
    var children = _a.children, icon = _a.icon, buttons = _a.buttons, header = _a.header, className = _a.className, attributes = __rest(_a, ["children", "icon", "buttons", "header", "className"]);
    return (React.createElement("div", __assign({ className: cn('table-state', 'is-empty', className) }, attributes),
        icon && evaluateRenderProp(icon),
        header && React.createElement("h2", null, header),
        children));
};
export default EmptyState;
//# sourceMappingURL=empty-state.js.map