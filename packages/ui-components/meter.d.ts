import React from 'react';
export interface MeterProps {
    title: string;
    value: number;
    className?: string;
}
export declare const Meter: React.SFC<MeterProps>;
export default Meter;
