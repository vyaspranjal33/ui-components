import React from 'react';
import Styles from './email-cards/email-card.module.scss';
import cn from './utilities/classnames';

export const NO_STATS_CHAR = '—';
export interface StatisticType {
  label: string;
  amount?: number | string;
}

export interface StatisticsProps {
  commonClass: string;
  className?: string;
}

export const EmailCardStat: React.SFC<{
  statistic: StatisticType;
  specificClass: string;
  commonClass?: string;
}> = ({ statistic, specificClass, commonClass }) => (
  <div className={commonClass} key={statistic.label}>
    <p
      className={cn('stat', specificClass, Styles.stat, Styles[specificClass])}
    >
      {statistic.amount || parseInt(statistic.amount as string, 10) === 0
        ? statistic.amount
        : NO_STATS_CHAR}
    </p>
    <p className={cn('label', Styles.label)}>{statistic.label}</p>
  </div>
);

export const Statistics: React.SFC<StatisticsProps> = ({
  commonClass,
  className,
  children,
  ...attributes
}) => {
  return (
    <div
      className={cn('email-card-stats', Styles['email-card-stats'], className)}
      {...attributes}
    >
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return React.cloneElement(child, { commonClass });
      })}
    </div>
  );
};

export default Statistics;
