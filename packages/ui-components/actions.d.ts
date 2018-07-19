/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export interface ActionsProps {
    children: React.ReactElement<ActionProps> | Array<React.ReactElement<ActionProps>>;
    className?: string;
    vertical?: boolean;
    inEmailCard?: boolean;
}
export declare const Actions: React.SFC<ActionsProps>;
export declare const ActionsCell: React.SFC<ActionsProps>;
export interface ActionProps {
    title: string;
    icon: IconType;
    onClick: (event: any) => void;
    showTitle?: boolean;
}
export declare const Action: React.SFC<ActionProps>;
export default Actions;
