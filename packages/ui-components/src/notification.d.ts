/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export declare type NotificationType = 'promo' | 'verification' | 'trial' | 'danger';
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
export declare const Notification: React.SFC<NotificationProps>;
export default Notification;
