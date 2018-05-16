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
export var NO_STATS_CHAR = '—';
export var EmailCardStat = function (_a) {
    var statistic = _a.statistic, specificClass = _a.specificClass, commonClass = _a.commonClass;
    return (React.createElement("div", { className: commonClass, key: statistic.label },
        React.createElement("p", { className: cn('stat', specificClass) }, (statistic.amount || parseInt(statistic.amount, 10) === 0) ? statistic.amount : NO_STATS_CHAR),
        React.createElement("p", { className: "label" }, statistic.label)));
};
export var Statistics = function (_a) {
    var commonClass = _a.commonClass, className = _a.className, children = _a.children, attributes = __rest(_a, ["commonClass", "className", "children"]);
    return (React.createElement("div", __assign({ className: cn('email-card-stats', className) }, attributes), React.Children.map(children, function (child) {
        return React.cloneElement(child, { commonClass: commonClass });
    })));
};
export default Statistics;
//# sourceMappingURL=statistics.js.map