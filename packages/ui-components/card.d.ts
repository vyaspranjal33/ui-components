/// <reference types="react" />
import React from 'react';
import { color as ValidColor } from './types/color';
export interface CardProps {
    children?: React.ReactElement<any>;
    centered?: boolean;
    thin?: boolean;
    inline?: boolean;
    title?: string;
    body?: string;
    badge?: {
        content: string;
        color: ValidColor;
    } | React.ReactElement<any>;
}
export declare const Card: React.SFC<CardProps>;
export default Card;
