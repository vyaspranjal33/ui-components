import React from 'react';

import cn from '../utilities/classnames';

import Badge from '../badge';
import Icon from '../icon';

import { color as ValidColor } from '../types/color';
import IconSizeType from '../types/icon-sizes';
import { IconType } from '../types/icons';

import CardBody from './card-body';
import CardIcon from './card-icon';
import CardTitle from './card-title';

export interface CardProps {
  children?: React.ReactNode;
  centered?: boolean;
  thin?: boolean;
  inline?: boolean;
  title?: string;
  body?: string;
  className?: string;
  badge?:
    | {
        content: string;
        color: ValidColor;
      }
    | React.ReactElement<any>;

  selected?: boolean;
}

export const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  inline,
  thin,
  title,
  className,
  selected,
  ...attributes
}) => {
  return (
    <div
      className={cn('card', className, {
        'is-centered': centered,
        'is-inline': inline,
        'is-selected': selected,
        'is-thin': thin,
      })}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Card;
export { CardTitle, CardBody, CardIcon };
