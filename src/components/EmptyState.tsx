import React from 'react';
import cn from '../utilities/classnames';

import { IconType } from '../types/icons';
import Icon from './Icon';

export interface EmptyStateProps {
  children?:
  | string
  | React.ReactElement<any>
  | Array<React.ReactElement<any>>;
  icon?: IconType;
  buttons?: Array<React.ReactElement<any>>;
  header?: string;
}

export const EmptyState: React.SFC<EmptyStateProps> = ({
  children,
  icon,
  buttons,
  header,
}) => (
  <div className="table-state is-empty">
    {icon && <Icon type={icon} />}
    {header && <h2>{header}</h2>}
    {children}
  </div>
);

export default EmptyState;
