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
import cn from './utilities/classnames';
export var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content, className = _a.className, attributes = __rest(_a, ["children", "color", "content", "className"]);
    return (React.createElement("span", __assign({ className: cn('badge', className, color) }, attributes), children || content));
};
Badge.defaultProps = {
    children: 0,
    className: '',
    color: '',
};
export default Badge;
//# sourceMappingURL=badge.js.map