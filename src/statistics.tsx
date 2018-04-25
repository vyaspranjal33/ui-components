import React from 'react';

export interface Statistic {
  label: string;
  amount?: number;
  format: string;
}

export interface StatisticsProps {
  statistics?: Statistic[];
  statsClassName: string;
}

export const Statistics: React.SFC<StatisticsProps> = ({ statistics, statsClassName }) => {
  // This uses numbers rather than formatted strings to prepare for locale specific number formatting
  const formatStatistic = (amount: number, format: string) => {
    if (typeof amount !== 'number') { return '—'; }
    if (format === 'number') {
      return amount.toLocaleString();
    } else {
      return (amount * 100).toFixed(2) + '%';
    }
  };

  const statisticsClassMap = ['', 'delivered', 'unique-opens', 'unique-clicks', 'unsubscribes'];
  const statisticsElements = statistics && statistics.map((stat, i) => {
    const value = formatStatistic(stat.amount, stat.format);
    const specificClass = statisticsClassMap[i] || '';
    return (
      <div className={statsClassName} key={stat.label}>
        <p className={'stat ' + specificClass}>{value}</p>
        <p className="label">{stat.label}</p>
      </div>
    );
  });

  return statisticsElements ?
    (
      <div className="email-card-stats">
        {statisticsElements}
      </div>
    ) : null;
};

export default Statistics;
