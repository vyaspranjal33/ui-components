import React from 'react';
import cn from '../utilities/classnames';

import { IconType } from '../types/icons';

export interface CardTitleProps {
  children?: React.ReactChild;
  className?: string;
  style?: React.CSSProperties;
  inline?: boolean;
}

export const CardTitle: React.SFC<CardTitleProps> = ({
  children,
  className = '',
  style,
  inline,
  ...attributes
}) => {
  return (
    <h2
      className={cn({ 'card-title': inline }, className)}
      style={style}
      {...attributes}
    >
      {children}
    </h2>
  );
};
export default CardTitle;
