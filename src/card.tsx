import React from 'react';
import Badge from './badge';
import { color as ValidColor } from './types/color';
import cn from './utilities/classnames';

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
  ...attributes,
}) => {

  return (
    <div
      className={cn('card', className, {
        'is-centered': centered,
        'is-inline': inline,
        'is-thin': thin,
      })}
      {...attributes}
    >
      {badge && <Badge {...badge} />}
      {title && <h2 className={cn({ 'card-title': inline })}>{title}</h2>}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;
