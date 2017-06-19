// @flow
import React from 'react';
import cn from 'classnames';
import ProgressItem from './ProgressItem';

export type ProgressProps = {
  vertical?: boolean,
  children?: ProgressItem[] | ProgressItem,
};

const Progress = ({ vertical, children }: ProgressProps) => (
  <div className={cn('progress-container', { 'is-vertical': vertical })}>
    <ul className="progress-stages">
      {children}
    </ul>
  </div>
);

Progress.defaultProps = {
  vertical: false,
  children: {},
};

export default Progress;
