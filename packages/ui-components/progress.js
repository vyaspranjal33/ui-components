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
export var Progress = function (_a) {
    var children = _a.children, vertical = _a.vertical, className = _a.className, attributes = __rest(_a, ["children", "vertical", "className"]);
    return (React.createElement("section", __assign({ className: cn('progress-container', className, {
            'is-vertical': vertical,
        }) }, attributes),
        React.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
export var ProgressStage = function (_a) {
    var label = _a.children, done = _a.done, selected = _a.selected, className = _a.className, attributes = __rest(_a, ["children", "done", "selected", "className"]);
    return (React.createElement("li", __assign({ className: cn(className, {
            'is-done': done,
            'is-selected': selected,
        }) }, attributes),
        React.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};
//# sourceMappingURL=progress.js.map