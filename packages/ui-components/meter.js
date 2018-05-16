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
export var Meter = function (_a) {
    var title = _a.title, value = _a.value, className = _a.className, attributes = __rest(_a, ["title", "value", "className"]);
    return (React.createElement("div", __assign({ className: cn('meter-container', className) }, attributes),
        React.createElement("span", { className: "meter-title" }, title),
        ' ',
        React.createElement("span", { className: "meter-value" },
            value,
            "%"),
        React.createElement("div", { className: "meter-bar" },
            React.createElement("div", { className: cn('meter-bar-fill', {
                    'is-above-50': value >= 50,
                    'is-below-25': value < 25,
                    'is-below-50': value < 50 && value >= 25,
                }), style: { width: value + "%" } }))));
};
export default Meter;
//# sourceMappingURL=meter.js.map