import * as React from 'react';
import * as cn from 'classnames';
import Icon from './Icon';
import { IconType } from '../types/icons';

export type AlertType = 'success' | 'warning' | 'danger';

export type AlertProps = {
  children: any;
  icon?: IconType;
  type: AlertType;
  hidden?: boolean;
  onClick?: (event: any) => void;
};

const iconFor = (type: AlertType): IconType => {
  if (type === 'success') return 'check-circle';
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
