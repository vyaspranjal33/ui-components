import * as cn from 'classnames';
import * as React from 'react';
import { IconType } from '../types/icons';
import Icon from './Icon';

export type AlertType = 'success' | 'warning' | 'danger';

export interface AlertProps {
  children: any;
  icon?: IconType;
  type: AlertType;
  hidden?: boolean;
  onClick?: (event: any) => void;
}

const iconFor = (type: AlertType): IconType => {
  if (type === 'success') {
    return 'check-circle';
  }
  return 'warning';
};

const Alert: React.SFC<AlertProps> = ({
  children,
  type,
  icon,
  onClick: handleClick,
}) => {
  return (
    <div className={cn('alert', `alert-${type}`)}>
      <p>
        <Icon type={icon || iconFor(type)} />
        {children}
        <Icon type="x" onClick={handleClick} />
      </p>
    </div>
  );
};

export default Alert;
