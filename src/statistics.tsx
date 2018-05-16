import React from 'react';
import cn from './utilities/classnames';
export const NO_STATS_CHAR = '—';
export interface Statistic {
  label: string;
  amount?: number | string;
}

export interface StatisticsProps {
  statistics?: Statistic[];
  statsClassName: string;
  className?: string;
}

export const Statistics: React.SFC<StatisticsProps> = (
  { statistics, statsClassName, className, ...attributes },
) => {

  const statisticsClassMap = ['', 'delivered', 'unique-opens', 'unique-clicks', 'unsubscribes'];
  const statisticsElements = statistics && statistics.map((stat, i) => {
    const specificClass = statisticsClassMap[i] || '';
    return (
      <div className={statsClassName} key={stat.label}>
        <p className={`stat ${specificClass}`}>
          {(stat.amount || parseInt(stat.amount as string, 10) === 0) ? stat.amount : NO_STATS_CHAR}
        </p>
        <p className="label">{stat.label}</p>
      </div>
    );
  });

  return statisticsElements ?
    (
      <div className={cn('email-card-stats', className)} {...attributes}>
        {statisticsElements}
      </div>
    ) : null;
};

export default Statistics;
