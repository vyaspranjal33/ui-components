import * as cn from 'classnames';
import * as React from 'react';
import { color as ValidColor } from '../types/color';
import Badge from './Badge';

export interface CardProps {
  children?: React.ReactElement<any>;
  centered?: boolean;
  thin?: boolean;
  inline?: boolean;
  title?: string;
  body?: string;
  badge?:
    | {
        content: string;
        color: ValidColor;
      }
    | React.ReactElement<any>;
}

const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  inline,
  thin,
  title,
}) => {
  return (
    <div
      className={cn('card', {
        'is-centered': centered,
        'is-thin': thin,
      })}
    >
      {badge && <Badge {...badge} />}
      {title && <h2>{title}</h2>}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;
