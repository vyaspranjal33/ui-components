import React from 'react';

import Card, { CardProps } from './card';
import Styles from './styles/card.module.scss';
import cn from './utilities/classnames';

export interface SplitCardSeparatorProps {
  label?: string;
  className?: string;
}

export const SplitCardSeparator: React.SFC<SplitCardSeparatorProps> = ({
  label,
  className,
  ...attributes
}) => {
  return (
    <hr
      className={cn(className, { 'has-label': label })}
      data-label={label}
      {...attributes}
    />
  );
};

export const SplitCard: React.SFC<CardProps> = ({
  children,
  className,
  ...attributes
}) => {
  return (
    <Card
      thin
      className={cn('is-split', Styles['is-split'], className)}
      {...attributes}
    >
      <div className={cn('split-content', Styles['split-content'])}>
        {children}
      </div>
    </Card>
  );
};

export default SplitCard;
