/// <reference types="react" />
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
export declare const Statistics: React.SFC<StatisticsProps>;
export default Statistics;
