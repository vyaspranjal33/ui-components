var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
var map = React.Children.map;
var mapper = function (children) { return (map(children, function (child, i) { return (child && React.createElement("li", { key: child.props.to || child.props.href },
    React.createElement(child.type, __assign({}, child.props)))); })); };
export var Breadcrumb = function (_a) {
    var children = _a.children, withoutTrailingSlash = _a.withoutTrailingSlash;
    return (React.createElement("ol", { className: "breadcrumb" },
        mapper(children),
        !withoutTrailingSlash && React.createElement("li", null)));
};
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map