// @flow
import React from 'react';
import cn from 'classnames';
import type { color as validColor } from '../types/color';

export type BadgeProps = {
  children?: string | number,
  color?: validColor,
};

const Badge = ({ children, color }: BadgeProps) =>
  <span className={cn('badge', color)}>{children}</span>;

Badge.defaultProps = {
  children: 0,
  color: '',
};

export default Badge;
