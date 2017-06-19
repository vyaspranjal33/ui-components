// @flow
import React from 'react';

export type MeterProps = {
  title: string,
  percentage: number,
};

const Meter = ({ title, percentage }: MeterProps) => {
  let percentageClass = '';
  if (percentage > 50) {
    percentageClass = 'is-above-50';
  } else if (percentage < 25) {
    percentageClass = 'is-below-25';
  } else if (percentage < 50) {
    percentageClass = 'is-below-50';
  }

  return (
    <div className="meter-container">
      <span className="meter-title">{title}</span>
      <span className="meter-value">{percentage}%</span>
      <div className="meter-bar">
        <div
          className={`meter-bar-fill ${percentageClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

Meter.defaultProps = {
  title: '',
  percentage: 0,
};
export default Meter;
