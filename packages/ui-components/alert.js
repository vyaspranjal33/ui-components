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
var iconFor = function (type) {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
export var Alert = function (_a) {
    var children = _a.children, dismissable = _a.dismissable, icon = _a.icon, inline = _a.inline, handleClick = _a.onClick, type = _a.type, hidden = _a.hidden, className = _a.className, attributes = __rest(_a, ["children", "dismissable", "icon", "inline", "onClick", "type", "hidden", "className"]);
    return (React.createElement("div", __assign({ className: cn('alert', "alert-" + type, className, {
            'alert-inline': inline,
        }), role: "alert" }, attributes),
        React.createElement("p", null,
            React.createElement(Icon, { type: icon || iconFor(type) }),
            children,
            dismissable && React.createElement(Icon, { type: "x", onClick: handleClick }))));
};
Alert.defaultProps = {
    dismissable: true,
    hidden: false,
    inline: false,
};
export default Alert;
//# sourceMappingURL=alert.js.map