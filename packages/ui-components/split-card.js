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
export const SplitCardSeparator = (_a) => {
    var { label, className } = _a, attributes = __rest(_a, ["label", "className"]);
    return (React.createElement("hr", Object.assign({ className: cn(className, { 'has-label': label }), "data-label": label }, attributes)));
};
export const SplitCard = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement(Card, Object.assign({ thin: true, className: cn('is-split', className) }, attributes),
        React.createElement("div", { className: "split-content" }, children)));
};
export default SplitCard;
//# sourceMappingURL=split-card.js.map