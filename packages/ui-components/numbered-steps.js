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
import Styles from './styles/numbered-steps.module.scss';
import cn from './utilities/classnames';
export const NumberedStep = (_a) => {
    var { children, header } = _a, attributes = __rest(_a, ["children", "header"]);
    return (React.createElement("li", Object.assign({}, attributes),
        React.createElement("h3", null, header),
        children));
};
export const NumberedSteps = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement("ol", { className: cn('numbered-steps', Styles['numbered-steps'], className) }, children));
};
//# sourceMappingURL=numbered-steps.js.map