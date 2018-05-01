import React from 'react';
export const Statistics = ({ statistics, statsClassName }) => {
    // This uses numbers rather than formatted strings to prepare for locale specific number formatting
    const formatStatistic = (amount, format) => {
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
    const statisticsClassMap = ['', 'delivered', 'unique-opens', 'unique-clicks', 'unsubscribes'];
    const statisticsElements = statistics && statistics.map((stat, i) => {
        const value = formatStatistic(stat.amount, stat.format);
        const specificClass = statisticsClassMap[i] || '';
        return (React.createElement("div", { className: statsClassName, key: stat.label },
            React.createElement("p", { className: 'stat ' + specificClass }, value),
            React.createElement("p", { className: "label" }, stat.label)));
    });
    return statisticsElements ?
        (React.createElement("div", { className: "email-card-stats" }, statisticsElements)) : null;
};
export default Statistics;
//# sourceMappingURL=statistics.js.map