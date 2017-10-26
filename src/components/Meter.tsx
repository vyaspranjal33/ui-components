import * as cn from 'classnames';
import * as React from 'react';

export interface MeterProps {
  title: string;
  value: number;
}

export const Meter: React.SFC<MeterProps> = ({ title, value }) => {
  return (
    <div className="meter-container">
      <span className="meter-title">{title}</span>
      <span className="meter-value">{value}%</span>
      <div className="meter-bar">
        <div
          className={cn('meter-bar-fill', {
            'is-above-50': value >= 50,
            'is-below-25': value < 25,
            'is-below-50': value < 50 && value >= 25,
          })}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default Meter;
