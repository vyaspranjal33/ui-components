import React from 'react';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import Icon from './Icon';

export type AlertType = 'success' | 'warning' | 'danger';

export interface AlertProps {
  children: any;
  icon?: IconType;
  inline?: boolean;
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

export const Alert: React.SFC<AlertProps> = ({
  children,
  icon,
  hidden,
  inline,
  onClick: handleClick,
  type,
}) => {
  if (hidden) return null;
  
  return (
    <div
      className={cn('alert', `alert-${type}`, {
        'alert-inline': inline,
      })}
      role="alert"
    >
      <p>
        <Icon type={icon || iconFor(type)} />
        {children}
        <Icon type="x" onClick={handleClick} />
      </p>
    </div>
  );
};

Alert.defaultProps = {
  hidden: false,
  inline: false,
};

export default Alert;
