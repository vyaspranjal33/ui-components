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
var lightStyle = { color: 'white' };
export var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark, size = _a.size, attributes = __rest(_a, ["type", "className", "onClick", "onDark", "size"]);
    return (React.createElement("i", __assign({ className: cn('sg-icon', "sg-icon-" + type, (_b = {},
            _b[className] = !!className,
            _b["is-size-" + size] = size,
            _b)), onClick: handleClick, style: onDark ? lightStyle : null }, attributes)));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};
export default Icon;
//# sourceMappingURL=icon.js.map