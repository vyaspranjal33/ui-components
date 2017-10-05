import * as cn from 'classnames';
import * as React from 'react';
import Color from '../types/Color';

export interface BadgeProps {
  children?: string | number;
  color?: Color;
  content?: string | number;
}

const Badge: React.SFC<BadgeProps> = ({ children, color, content }) => (
  <span className={cn('badge', color)}>{children || content}</span>
);

Badge.defaultProps = {
  children: 0,
  color: Color.None,
};

export default Badge;
