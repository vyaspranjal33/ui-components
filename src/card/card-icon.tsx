import React, { ReactNode } from 'react';
import Icon from '../icon';
import IconSize from '../types/icon-sizes';
import { IconType } from '../types/icons';

export interface CardIconProps {
  children?: ReactNode;
  className?: string;
  iconSize: IconSize;
  icon: IconType;
  style?: React.CSSProperties;
}

export const CardIcon: React.SFC<CardIconProps> = ({
  children,
  className = '',
  style,
  iconSize,
  icon,
  ...attributes
}) => {
  return (
    <div className={`card-icon ${className}`} style={style} {...attributes}>
      <Icon size={iconSize} type={icon} />
    </div>
  );
};
export default CardIcon;
