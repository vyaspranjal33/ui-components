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
const headerStyle = {
    marginTop: 10,
};
const headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
export const PageHeader = (_a) => {
    var { children } = _a, attributes = __rest(_a, ["children"]);
    return React.createElement("header", Object.assign({}, attributes), children);
};
export const PageHeading = (_a) => {
    var { children, className, title } = _a, attributes = __rest(_a, ["children", "className", "title"]);
    return (React.createElement("div", Object.assign({ className: cn('content-header', className), style: headerStyle }, attributes),
        React.createElement("h1", { style: headingStyle }, title),
        children && React.createElement("div", { className: "btn-list" }, children)));
};
PageHeading.defaultProps = {
    title: '',
};
export default PageHeader;
//# sourceMappingURL=page-header.js.map