import * as React from 'react';
import * as cn from 'classnames';
import Badge from './Badge';
import { color as ValidColor } from '../types/color';

export type CardProps = {
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
};

const Card: React.SFC<CardProps> = ({
  centered,
  children,
  thin,
  inline,
  title,
  body,
  badge,
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
