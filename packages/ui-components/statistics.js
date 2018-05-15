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
export var Statistics = function (_a) {
    var statistics = _a.statistics, statsClassName = _a.statsClassName, className = _a.className, attributes = __rest(_a, ["statistics", "statsClassName", "className"]);
    // This uses numbers rather than formatted strings to prepare for locale specific number formatting
    var formatStatistic = function (amount, format) {
        if (typeof amount !== 'number') {
            return '—';
        }
        if (format === 'number') {
            return amount.toLocaleString();
        }
        else {
            return (amount * 100).toFixed(2) + '%';
        }
    };
    var statisticsClassMap = ['', 'delivered', 'unique-opens', 'unique-clicks', 'unsubscribes'];
    var statisticsElements = statistics && statistics.map(function (stat, i) {
        var value = formatStatistic(stat.amount, stat.format);
        var specificClass = statisticsClassMap[i] || '';
        return (React.createElement("div", { className: statsClassName, key: stat.label },
            React.createElement("p", { className: 'stat ' + specificClass }, value),
            React.createElement("p", { className: "label" }, stat.label)));
    });
    return statisticsElements ?
        (React.createElement("div", __assign({ className: cn('email-card-stats', className) }, attributes), statisticsElements)) : null;
};
export default Statistics;
//# sourceMappingURL=statistics.js.map