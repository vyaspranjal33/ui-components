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
var map = React.Children.map;
export var ButtonList = function (_a) {
    var children = _a.children, onDark = _a.onDark, className = _a.className, attributes = __rest(_a, ["children", "onDark", "className"]);
    return (React.createElement("div", __assign({ className: cn('btn-list', className) }, attributes), map(children, function (button) {
        return button && React.cloneElement(button, { onDark: onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};
export default ButtonList;
//# sourceMappingURL=button-list.js.map