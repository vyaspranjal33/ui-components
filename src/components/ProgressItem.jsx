// @flow
import React from 'react';
import cn from 'classnames';

export type ProgressProps = {
  label: string,
  done?: boolean,
  selected?: boolean,
};

const ProgressItem = ({ label, done, selected }: ProgressProps) => (
  <li
    className={cn({
      'is-selected': selected,
      'is-done': done,
    })}
  >
    <label>{label}</label>
  </li>
);

ProgressItem.defaultProps = {
  done: false,
  selected: false,
};

export default ProgressItem;
