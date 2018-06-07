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
import Icon from './icon';
import Styles from './styles/tables.module.scss';
import cn from './utilities/classnames';
const evaluateRenderProp = prop => {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React.createElement(Icon, { type: prop });
    }
};
export const EmptyState = (_a) => {
    var { children, icon, buttons, header, className } = _a, attributes = __rest(_a, ["children", "icon", "buttons", "header", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['table-state'], Styles['is-empty'], className) }, attributes),
        icon && evaluateRenderProp(icon),
        header && React.createElement("h2", null, header),
        children));
};
export default EmptyState;
//# sourceMappingURL=empty-state.js.map