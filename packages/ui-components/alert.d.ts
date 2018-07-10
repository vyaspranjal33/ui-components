import React from 'react';
import { IconType } from './types/icons';
export declare type AlertType = 'success' | 'warning' | 'danger';
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
export declare const Alert: React.SFC<AlertProps>;
export default Alert;
