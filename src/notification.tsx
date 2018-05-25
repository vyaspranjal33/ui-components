import React from 'react';
import Icon from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export type NotificationType = 'promo' | 'verification' | 'trial' | 'danger';

export interface NotificationProps {
  children: any;
  dismissable?: boolean;
  hasSteps?: boolean;
  icon?: IconType;
  type: NotificationType;
  hidden?: boolean;
  className?: string;
  onClick?: (event: any) => void;
}

const hasIcon = (type: NotificationType, icon: IconType): any => (
  type === 'trial' || type === 'danger' || icon
);

const iconFor = (type: NotificationType): IconType => {
  if (type === 'trial') {
    return 'clock';
  }

  if (type === 'danger') {
    return 'warning';
  }
};

export const Notification: React.SFC<NotificationProps> = ({
  children,
  dismissable,
  hasSteps,
  icon,
  onClick: handleClick,
  type,
  hidden,
  className,
  ...attributes,
}) => {
  return (
    <div
      className={cn('alert', `alert-${type}`, className)}
      role="notification"
      {...attributes}
    >
      { hasSteps ?
        children :
        <p>
          {hasIcon(type, icon) && <Icon type={icon || iconFor(type)} />}
          {children}
          {dismissable && <Icon type="x" onClick={handleClick} />}
        </p>
      }
    </div >
  );
};

Notification.defaultProps = {
  dismissable: false,
  hasSteps: false,
  hidden: false,
};

export default Notification;
