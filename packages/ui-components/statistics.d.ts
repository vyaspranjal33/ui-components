import React from 'react';
export declare const NO_STATS_CHAR = "\u2014";
export interface StatisticType {
    label: string;
    amount?: number | string;
}
export interface StatisticsProps {
    commonClass: string;
    className?: string;
}
export declare const EmailCardStat: React.SFC<{
    statistic: StatisticType;
    specificClass: string;
    commonClass?: string;
}>;
export declare const Statistics: React.SFC<StatisticsProps>;
export default Statistics;
