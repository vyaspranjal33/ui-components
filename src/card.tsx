import React from 'react';

import cn from './utilities/classnames';

import Badge from './badge';
import Icon from './icon';

import { color as ValidColor } from './types/color';
import { IconSizeType } from './types/icon-sizes';
import { IconType } from './types/icons';
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
  icon?: IconType;
  iconSize?: IconSizeType;
  selected?: boolean;
}

export const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  icon,
  iconSize,
  inline,
  thin,
  title,
  className,
  selected,
  ...attributes,
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
      {badge && <Badge {...badge} />}
      {icon &&
        <div className="card-icon">
          <Icon size={iconSize} type={icon} />
        </div>
      }
      {title && <h2 className={cn({ 'card-title': inline })}>{title}</h2>}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;
