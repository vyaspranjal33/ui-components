import React from 'react';
import Icon from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export type AlertType = 'success' | 'warning' | 'danger';

export interface AlertProps {
  children: any;
  dismissable?: boolean;
  icon?: IconType;
  inline?: boolean;
  type: AlertType;
  hidden?: boolean;
  className?: string;
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
  dismissable,
  icon,
  inline,
  onClick: handleClick,
  type,
  hidden,
  className,
  ...attributes,
}) => {
  return (
    <div
      className={cn('alert', `alert-${type}`, className, {
        'alert-inline': inline,
      })}
      role="alert"
      {...attributes}
    >
      <p>
        <Icon type={icon || iconFor(type)} />
        {children}
        {dismissable && <Icon type="x" onClick={handleClick} />}
      </p>
    </div>
  );
};

Alert.defaultProps = {
  dismissable: true,
  hidden: false,
  inline: false,
};

export default Alert;
