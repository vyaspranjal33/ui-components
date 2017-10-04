import * as React from 'react';
import * as cn from 'classnames';
import { color as validColor } from '../types/color';

export type BadgeProps = {
  children?: string | number;
  color?: string;
};

const Badge: React.SFC<BadgeProps> = ({ children, color }) => (
  <span className={cn('badge', color)}>{children}</span>
);

Badge.defaultProps = {
  children: 0,
  color: '',
};

export default Badge;
