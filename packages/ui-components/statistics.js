import React from 'react';
export var Statistics = function (_a) {
    var statistics = _a.statistics, statsClassName = _a.statsClassName;
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
        (React.createElement("div", { className: "email-card-stats" }, statisticsElements)) : null;
};
export default Statistics;
//# sourceMappingURL=statistics.js.map