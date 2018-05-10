import React from 'react';
import { color as validColor } from './types/color';
import cn from './utilities/classnames';

export interface BadgeProps {
  children?: string | number;
  color?: string;
  content?: string | number;
}

export const Badge: React.SFC<BadgeProps> = ({ children, color, content, ...primitiveProps }) => (
  <span className={cn('badge', color)} {...primitiveProps}>{children || content}</span>
);

Badge.defaultProps = {
  children: 0,
  color: '',
};

export default Badge;
