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
var mapper = function (children) { return (map(children, function (child, i) { return (child && React.createElement("li", { key: child.props.to || child.props.href },
    React.createElement(child.type, __assign({}, child.props)))); })); };
export var Breadcrumb = function (_a) {
    var children = _a.children, withoutTrailingSlash = _a.withoutTrailingSlash, className = _a.className, attributes = __rest(_a, ["children", "withoutTrailingSlash", "className"]);
    return (React.createElement("ol", __assign({ className: cn('breadcrumb', className) }, attributes),
        mapper(children),
        !withoutTrailingSlash && React.createElement("li", null)));
};
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map