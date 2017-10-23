import * as cn from 'classnames';
import * as React from 'react';

import { IconType } from '../types/icons';

export interface EmptyStateProps {
  children?:
  | string
  | React.ReactElement<any>
  | Array<React.ReactElement<any>>;
  icon?: IconType;
  buttons?: Array<React.ReactElement<any>>;
  header?: string;
}

const EmptyState: React.SFC<EmptyStateProps> = ({
  children,
  icon,
  buttons,
  header,
}) => (
  <div className='table-state is-empty'>
    { icon && <i className={`sg-icon sg-icon-${icon}`}></i> }
    { header && <h2>{header}</h2> }
    {children}
  </div>
);

export default EmptyState;
