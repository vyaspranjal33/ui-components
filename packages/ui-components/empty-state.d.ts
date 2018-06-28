import React from 'react';
import { IconType } from './types/icons';
export interface EmptyStateProps {
    children?: string | React.ReactElement<any> | Array<React.ReactElement<any>>;
    icon?: IconType | (() => React.ReactNode);
    buttons?: Array<React.ReactElement<any>>;
    header?: string;
    className?: string;
}
export declare const EmptyState: React.SFC<EmptyStateProps>;
export default EmptyState;
