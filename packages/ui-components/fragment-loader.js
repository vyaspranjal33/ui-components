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
export var FragmentLoader = function (_a) {
    var className = _a.className, attributes = __rest(_a, ["className"]);
    return (React.createElement("svg", __assign({ className: cn('fragment-loader', className) }, attributes),
        React.createElement("rect", { className: "fragment-square left", width: "10", height: "10" }),
        React.createElement("rect", { className: "fragment-square middle", width: "10", height: "10" }),
        React.createElement("rect", { className: "fragment-square right", width: "10", height: "10" })));
};
export default FragmentLoader;
//# sourceMappingURL=fragment-loader.js.map