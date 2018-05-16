/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export interface ActionsProps {
    children: React.ReactElement<ActionProps> | Array<React.ReactElement<ActionProps>>;
    className?: string;
}
export declare const Actions: React.SFC<ActionsProps>;
export declare const ActionsCell: React.SFC<ActionsProps>;
export interface ActionProps {
    title: string;
    icon: IconType;
    onClick: (event: any) => void;
}
export declare const Action: React.SFC<ActionProps>;
export default Actions;
