/// <reference types="react" />
import React from 'react';
export declare const NO_STATS_CHAR = "—";
export interface Statistic {
    label: string;
    amount?: number | string;
}
export interface StatisticsProps {
    statistics?: Statistic[];
    statsClassName: string;
    className?: string;
}
export declare const Statistics: React.SFC<StatisticsProps>;
export default Statistics;
