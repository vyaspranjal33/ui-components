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
import Card from './card';
import cn from './utilities/classnames';
export var SplitCardSeparator = function (_a) {
    var label = _a.label, className = _a.className, attributes = __rest(_a, ["label", "className"]);
    return (React.createElement("hr", __assign({ className: cn(className, { 'has-label': label }), "data-label": label }, attributes)));
};
export var SplitCard = function (_a) {
    var children = _a.children, className = _a.className, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement(Card, __assign({ thin: true, className: cn('is-split', className) }, attributes),
        React.createElement("div", { className: "split-content" }, children)));
};
export default SplitCard;
//# sourceMappingURL=split-card.js.map