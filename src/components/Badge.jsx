// @flow
import React from 'react';
import cn from 'classnames';
import colors from '../lib/colors';
import type { color as validColor } from '../types/color';

export type BadgeProps = {
  label: string | number,
  color: validColor,
};

const Badge = ({ label, color }: BadgeProps) =>
  <span className={cn('badge', colors[color])}>{label}</span>;

Badge.defaultProps = {
  color: 'default',
  label: 0,
};

export default Badge;

// "postinstall": "cd style-guide && npm install && cd ..",
