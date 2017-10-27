import * as cn from 'classnames';
import * as React from 'react';
import { color as validColor } from '../types/color';

export interface BadgeProps {
  children?: string | number;
  color?: string;
  content?: string | number;
}

export const Badge: React.SFC<BadgeProps> = ({ children, color, content }) => (
  <span className={cn('badge', color)}>{children || content}</span>
);

Badge.defaultProps = {
  children: 0,
  color: '',
};

export default Badge;
