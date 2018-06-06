import React from 'react';
import Styles from './styles/meter.module.scss';
import cn from './utilities/classnames';

export interface MeterProps {
  title: string;
  value: number;
  className?: string;
}

export const Meter: React.SFC<MeterProps> = ({
  title,
  value,
  className,
  ...attributes
}) => {
  return (
    <div className={cn(Styles['meter-container'], className)} {...attributes}>
      <span className={Styles['meter-title']}>{title}</span>{' '}
      <span className={Styles['meter-value']}>{value}%</span>
      <div className={Styles['meter-bar']}>
        <div
          className={cn(Styles['meter-bar-fill'], {
            [Styles['is-above-50']]: value >= 50,
            [Styles['is-below-25']]: value < 25,
            [Styles['is-below-50']]: value < 50 && value >= 25,
          })}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default Meter;
