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
import Styles from './styles/breadcrumb.module.scss';
import cn from './utilities/classnames';
const { map } = React.Children;
const mapper = (children) => map(children, (child, i) => child && (React.createElement("li", { key: child.props.to || child.props.href },
    React.createElement(child.type, Object.assign({}, child.props)))));
export const Breadcrumb = (_a) => {
    var { children, withoutTrailingSlash, className } = _a, attributes = __rest(_a, ["children", "withoutTrailingSlash", "className"]);
    return (React.createElement("ol", Object.assign({ className: cn(Styles.breadcrumb, className) }, attributes),
        mapper(children),
        !withoutTrailingSlash && React.createElement("li", null)));
};
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map