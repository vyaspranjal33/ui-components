import React from 'react';
import { color as validColor } from './types/color';
import cn from './utilities/classnames';

export interface BadgeProps {
  children?: string | number;
  color?: string;
  content?: string | number;
  className?: string;
}

export const Badge: React.SFC<BadgeProps> = ({ children, color, content, className, ...passThroughProps }) => (
  <span className={cn('badge', className, color)} {...passThroughProps}>{children || content}</span>
);

Badge.defaultProps = {
  children: 0,
  className: '',
  color: '',
};

export default Badge;
