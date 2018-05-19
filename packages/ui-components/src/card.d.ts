/// <reference types="react" />
import React from 'react';
import { color as ValidColor } from './types/color';
export interface CardProps {
    children?: React.ReactNode;
    centered?: boolean;
    thin?: boolean;
    inline?: boolean;
    title?: string;
    body?: string;
    className?: string;
    badge?: {
        content: string;
        color: ValidColor;
    } | React.ReactElement<any>;
}
export declare const Card: React.SFC<CardProps>;
export default Card;
