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
import Styles from './styles/progress.module.scss';
import cn from './utilities/classnames';
export const Progress = (_a) => {
    var { children, vertical, className } = _a, attributes = __rest(_a, ["children", "vertical", "className"]);
    return (React.createElement("section", Object.assign({ className: cn(Styles['progress-container'], className, {
            [Styles['is-vertical']]: vertical,
        }) }, attributes),
        React.createElement("ul", { className: Styles['progress-stages'] }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
export const ProgressStage = (_a) => {
    var { children: label, done, selected, className } = _a, attributes = __rest(_a, ["children", "done", "selected", "className"]);
    return (React.createElement("li", Object.assign({ className: cn(className, {
            [Styles['is-done']]: done,
            [Styles['is-selected']]: selected,
        }) }, attributes),
        React.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};
//# sourceMappingURL=progress.js.map