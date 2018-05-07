import React from 'react';
import Badge from './badge';
import Styles from './styles/card.module.scss';
import { color as ValidColor } from './types/color';
import cn from './utilities/classnames';

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

export const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  inline,
  thin,
  title,
}) => {

  const titleStyle = {
    width: '100%',
  } as React.CSSProperties;

  return (
    <div
      className={cn(Styles.card, {
        [Styles['is-centered']]: centered,
        [Styles['is-thin']]: thin,
      })}
    >
      {badge && <Badge {...badge} />}
      {title && <h2 style={titleStyle}>{title}</h2>}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;
