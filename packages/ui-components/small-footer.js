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
import Icon from './icon';
export const Footer = (_a) => {
    var { children, icon, header, className } = _a, attributes = __rest(_a, ["children", "icon", "header", "className"]);
    return (React.createElement("p", Object.assign({ className: cn('small', 'is-center', className) }, attributes),
        icon && (React.createElement("span", null,
            React.createElement(Icon, { type: icon }),
            ' ')),
        header && React.createElement("strong", null, `${header} `),
        children));
};
export default Footer;
//# sourceMappingURL=small-footer.js.map